import express from "express";

import {
    getAllUsers,
    getUser,
    getUserById,
    loginUser,
    registerUser,
} from "../controllers/userController.js";
import { auth, authRoles } from "../middleware/authUser.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", auth, getUser);
router.get("/get-all-users", getAllUsers);
router.get("/get-user-id", getUserById);

export default router;
