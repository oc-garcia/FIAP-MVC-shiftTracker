var express = require("express");
var router = express.Router();
var userRenderController = require("../controllers/userRenderController.js");

router.get("/", userRenderController.getAll);
router.get("/new", userRenderController.new);
router.get("/:id", userRenderController.getById);
router.get("/:id/edit", userRenderController.edit);
router.post("/", userRenderController.create);
router.patch("/:id", userRenderController.update);
router.delete("/:id", userRenderController.delete);

module.exports = router;
