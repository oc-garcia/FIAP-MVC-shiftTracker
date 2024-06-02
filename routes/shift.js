var express = require("express");
var router = express.Router();
var shiftController = require("../controllers/shiftController.js");

router.get("/", shiftController.getAll);
router.get("/new", shiftController.createForm);
router.get("/edit/:id", shiftController.editForm); 
router.get("/:id", shiftController.getById);
router.get("/user/:userId", shiftController.shiftByUser);
router.post("/", shiftController.create);
router.patch("/:id", shiftController.update);
router.delete("/:id", shiftController.delete);

module.exports = router;