var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController.js");

router.get("/", userController.getAll);
router.get("/:id", userController.getById);

// CREATE
router.post("/", (req, res, next) => {
  // Insert user into the database
  // res.send('User created');
});

// PATCH user by ID
router.patch("/:id", (req, res, next) => {
  // Update user with req.params.id in the database
  // res.send('User updated');
});

// DELETE
router.delete("/:id", (req, res, next) => {
  // Delete user with req.params.id from the database
  // res.send('User deleted');
});

module.exports = router;
