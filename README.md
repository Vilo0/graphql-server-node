### graphql-server-node
Node Server + Express + Graphql + Apollo Server

### Reestructuración node_modules
yarn or npm install

### Funcionalidades


<details><summary><b>All Posts</b></summary>

 
  `Response`: Todos los posts que estén en la base de datos
  
 `Params`:

    {
      "limit": Int!,
      "page": Int!,
      "search": String!
    }
    
</details>


<details><summary><b>Posts By User</b></summary>

 
  `Response`: Todos los posts que pertenezcan al usuario que realiza la consulta
  
 `Params`:

    {
      "limit": Int!,
      "page": Int!,
      "search": String!
    }
    
</details>

<details><summary><b>Show Post</b></summary>

 
  `Response`: Detalle del post a visualizar
  
 `Params`:

    {
      "id": ID!
    }
    
</details>


<details><summary><b>New Post</b></summary>

 
  `Response`: Post creado
  
 `Params`:

    {
      "limit": Number,
      "page": Number,
      "search": String
    }
    
</details>


<details><summary><b>Post Update</b></summary>

 
  `Response`: Post Actualizado
  
 `Params`:

    {
      "limit": Number,
      "page": Number,
      "search": String
    }
    
</details>


<details><summary><b>Post Delete</b></summary>

 
  `Response`: Post Eliminado
  
 `Params`:

    {
      "limit": Number,
      "page": Number,
      "search": String
    }
    
</details>


# Test Images in Graphql Playground

### `Posts`

<p align="center">
  <span>All Posts</span>
  <img src="./images/all-posts.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>Posts By User</span>
  <img src="./images/byUsers-post.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>Show Post</span>
  <img src="./images/show-post.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>Show Post - Not found</span>
  <img src="./images/show-post-not-found.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>New Post</span>
  <img src="./images/new-post.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>Post Update</span>
  <img src="./images/update-post.png" alt="All Posts" width="1200">
</p>


<p align="center">
  <span>Post Update - Not found</span>
  <img src="./images/update-post-not-found.png" alt="All Posts" width="1200">
</p>


<p align="center">
  <span>Post Delete</span>
  <img src="./images/delete-post.png" alt="All Posts" width="1200">
</p>


<p align="center">
  <span>Post Delete- Not Found</span>
  <img src="./images/delete-post-not-found.png" alt="All Posts" width="1200">
</p>


### `Users`

<p align="center">
  <span>All Users</span>
  <img src="./images/all-users.png" alt="All Posts" width="1200">
</p>


<p align="center">
  <span>Public Profile</span>
  <img src="./images/public-profile.png" alt="All Posts" width="1200">
</p>


<p align="center">
  <span>Profile</span>
  <img src="./images/profile-user.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>Create User</span>
  <img src="./images/create-user.png" alt="All Posts" width="1200">
</p>

<p align="center">
  <span>Update User</span>
  <img src="./images/update-user.png" alt="All Posts" width="1200">
</p>
