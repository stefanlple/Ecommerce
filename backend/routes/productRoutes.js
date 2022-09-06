const express = require("express");
const {
  registerProduct,
  getProduct,
} = require("../controllers/productController");

const router = express.Router();

router.get("/collection", getProduct);
router.post("/registerProduct", registerProduct);

module.exports = router;
