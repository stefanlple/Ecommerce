const express = require("express");
const {
  registerProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/collection", getProduct);
router.post("/registerProduct", registerProduct);
router.delete("/deleteProduct", deleteProduct);
router.put("/updateProduct", updateProduct);

module.exports = router;
