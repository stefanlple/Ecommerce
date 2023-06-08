const express = require("express");
const {
  registerCart,
  addToCart,
  deleteCart,
  deleteProductfromCart,
  getCart,
} = require("../controllers/cartController");
const { auth, authRoles } = require("../middleware/authUser");

const router = express.Router();

router.get("/getCart", auth, getCart);
router.post("/add", auth, registerCart);
router.post("/add-to-cart", auth, addToCart);
router.post("/delete", auth, deleteProductfromCart);
// router.post("/add/:cartId", addToCart);
router.delete("/delete/:cartId", deleteCart);

module.exports = router;
