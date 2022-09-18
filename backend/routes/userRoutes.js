const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controllers/userController");
const router = express.Router();
const { auth, authRoles } = require("../middleware/authUser");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", auth, getUser);

module.exports = router;
