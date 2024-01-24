import express from "express";

import {
    addToCart,
    deleteCart,
    deleteProductfromCart,
    getAllCarts,
    getCart,
    getCartById,
    registerCart,
} from "../controllers/cartController.js";
import { auth, authRoles } from "../middleware/authUser.js";

const router = express.Router();

router.get("/getCart", auth, getCart);

router.get("/get-all-carts", getAllCarts);
router.post("/get-cart-by-id", getCartById);

router.post("/add", auth, registerCart);
router.post("/add-to-cart", auth, addToCart);
router.post("/delete", auth, deleteProductfromCart);
// router.post("/add/:cartId", addToCart);
router.delete("/delete/:cartId", deleteCart);

export default router;
