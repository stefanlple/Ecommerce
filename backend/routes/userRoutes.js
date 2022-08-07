const express = require("express");
const { registerUser, loginUser } = require("../controllers/userController");
const router = express.Router();

router.post("/", registerUser);
router.post("/", loginUser);

module.exports = router;
