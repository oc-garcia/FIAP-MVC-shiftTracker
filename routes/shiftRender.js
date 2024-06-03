var express = require("express");
var router = express.Router();
var shiftRenderController = require("../controllers/shiftRenderController.js");

router.get("/", shiftRenderController.getAll);
router.get("/new", shiftRenderController.createForm);
router.get("/edit/:id", shiftRenderController.editForm); 
router.get("/:id", shiftRenderController.getById);
router.get("/user/:userId", shiftRenderController.shiftByUser);
router.post("/", shiftRenderController.create);
router.patch("/:id", shiftRenderController.update);
router.delete("/:id", shiftRenderController.delete);

module.exports = router;