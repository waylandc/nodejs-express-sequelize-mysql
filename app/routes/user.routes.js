module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new user
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  // Retrieve all published Users
  // router.get("/published", users.findAllPublished);

  // Retrieve a single User with email
  router.get("/:email", users.findEmail);

  // Update a User with id
  router.put("/:id", users.update);

  // Delete a User with id
  router.delete("/:id", users.delete);

  // Create a new User
  router.delete("/", users.deleteAll);

  router.post("/login", users.login);
  
  app.use('/api/users', router);
};
