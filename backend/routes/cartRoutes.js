const express = require("express");
const {
  registerCart,
  addToCart,
  deleteCart,
  deleteProductfromCart,
} = require("../controllers/cartController");
const { auth, authRoles } = require("../middleware/authUser");

const router = express.Router();

router.post("/add", auth, registerCart);
router.post("/add/:cartId", addToCart);
router.delete("/delete/:cartId", deleteCart);
router.delete("/delete/:cartId/:productId", deleteProductfromCart);

module.exports = router;
