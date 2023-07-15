const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");
const router = express.Router();
const { auth, authRoles } = require("../middleware/authUser");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", auth, getUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-user-id", getUserById);

module.exports = router;
