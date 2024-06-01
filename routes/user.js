var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController.js");

router.get("/", userController.getAll);
router.get("/new", userController.new);
router.get("/:id", userController.getById);
router.get("/:id/edit", userController.edit);

router.post("/", userController.create);

router.patch("/:id", userController.update);

router.delete("/:id", userController.delete);

module.exports = router;