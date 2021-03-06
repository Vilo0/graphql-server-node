//const { posts } = require("../temp");
const { authCheck } = require("../helpers/auth");
const Post = require("../models/post");
const User = require("../models/user");

// mutation
const postCreate = async (parent, args, { req }) => {
  const currentUser = await authCheck(req);
  // validation
  if (args.input.content.trim() === "") throw new Error("Content is required");
  
  const currentUserFromDb = await User.findOne({
    email: currentUser.email
  });
  let newPost = await new Post({
    ...args.input,
    postedBy: currentUserFromDb._id
  })
    .save()
    .then((post) => post.populate("postedBy", "_id username email").execPopulate());
    
  return newPost;
};

const postShow = async (_, { id }, { req }) => {
  const post = await Post.findById(id).populate("postedBy", "_id username email").exec();
  if(!post) throw new Error("Post not found!");
  return post;
}

const postUpdate = async (_, args, { req }) => {
  const currentUser = await authCheck(req);
  // validation
  const post = await Post.findById(args.id).populate("postedBy").exec();
  if(!post) throw new Error("Post not found!");
  if(post.postedBy.email !== currentUser.email) throw new Error("You cannot delete a post that is not yours");

  return await Post.findByIdAndUpdate(args.id, { $set: args.input }, { new: true }).then((post) => post.populate("postedBy", "_id username email").execPopulate());
};

const postDelete = async (_, args, { req }) => {
  const currentUser = await authCheck(req);
  // validation
  const post = await Post.findById(args.id).populate("postedBy").exec();
  console.log(post);
  if(!post)  throw new Error("Post not found!");
  if(post.postedBy.email !== currentUser.email) throw new Error("You cannot delete a post that is not yours");

  return await Post.findByIdAndDelete(args.id).then((post) => post.populate("postedBy", "_id username email").execPopulate()); 
};

const totalPosts = async (parent, args) => {
  return await Post.countDocuments().exec();
}

// query generic
const allPosts = async (parent, args) => {
  let page = 0, limit = 20, search = "";
  if(args.limit) limit = args.limit;
  if(args.page) page = args.page - 1;
  if(args.search) search = args.search
  page = Math.max(0, page);

  const conditions = search ? { "content": { "$regex": search, "$options": "i" } } : {};

  const total = await Post.countDocuments(conditions).exec();
  const pages = parseInt(total / limit) > 0 ? Math.ceil(total / limit) : 1;
  
  const posts = await Post.find(conditions)
    .populate("postedBy", "_id username email")
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * page).exec();

  return {
    posts,
    page: page + 1,
    pages,
    total
  }
};

// query generic
const postsByUser = async (parent, args, { req }) => {
  let page = 0, limit = 20, search = "";
  if(args.limit) limit = args.limit;
  if(args.page) page = args.page - 1;
  if(args.search) search = args.search;
  page = Math.max(0, page);

  const currentUser = await authCheck(req);
  const currentUserFromDb = await User.findOne({
    email: currentUser.email
  }).exec();

  
  let conditions = search ? { "content": { "$regex": search, "$options": "i" } } : {};
  conditions = { ...conditions, postedBy: currentUserFromDb };
  
  const total = await Post.countDocuments(conditions).exec();
  const pages = parseInt(total / limit) > 0 ? Math.ceil(total / limit) : 1;
  
  const posts =  await Post.find(conditions)
    .populate("postedBy", "_id username email")
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(limit * page);

  return {
    posts,
    page: page + 1,
    pages,
    total
  }
};

module.exports = {
  Query: {
    allPosts,
    totalPosts,
    postsByUser,
    postShow
  },
  Mutation: {
    postCreate,
    postUpdate,
    postDelete
  },
};


