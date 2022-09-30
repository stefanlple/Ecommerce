const express = require("express");
const {
  getAllProducts,
  registerProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/collection", getAllProducts);
router.get("/:id", getProduct);
router.post("/registerProduct", registerProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
