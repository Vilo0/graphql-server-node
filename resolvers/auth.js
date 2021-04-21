const { authCheck } = require("../helpers/auth");

const me = (parent, args, { req, res }) => {
  authCheck(req, res);
  return "Miguel";
};

module.exports = {
  Query: {
    me,
  },
};
