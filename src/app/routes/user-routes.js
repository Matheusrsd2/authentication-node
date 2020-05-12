const express = require("express");
const router = express.Router();

const userController = require("./../controllers/user-controller");

router.post("/", userController.post);

router.get("/", userController.getAll);

router.get("/:userId", userController.get);

module.exports = router;
