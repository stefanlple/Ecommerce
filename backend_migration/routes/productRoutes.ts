import express from "express";
import {
    deleteProduct,
    getAllProducts,
    getProduct,
    getProductsByCategory,
    getProductsByName,
    registerProduct,
    updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/search", getProductsByName);
router.get("/collection", getAllProducts);
router.get("/collection/:category", getProductsByCategory);
router.get("/:id", getProduct);
router.post("/registerProduct", registerProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
