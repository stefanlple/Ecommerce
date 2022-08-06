const express = require("express");
import { registerUser, loginUser } from "../controllers/userController";
const router = express.Router();

router.post("/", loginUser);

router.post("/", registerUser);

module.exports = router;
