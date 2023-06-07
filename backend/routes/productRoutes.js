const express = require("express");
const {
  getAllProducts,
  registerProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  getProductsByName,
  getProductsByCategory,
} = require("../controllers/productController");

const router = express.Router();

router.post("/search", getProductsByName);
router.get("/collection", getAllProducts);
router.get("/collection/:category", getProductsByCategory);
router.get("/:id", getProduct);
router.post("/registerProduct", registerProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
