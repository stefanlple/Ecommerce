const express = require("express");
const {
  addCart,
  updateCart,
  deleteCart,
  deleteProductfromCart,
} = require("../controllers/cartController");
const { auth, authRoles } = require("../middleware/authUser");

const router = express.Router();

router.get("/add", addCart);
router.get("/delete/:cartId", deleteCart);
router.get("/add/:cartId", updateCart);
router.get("/delete/:cartId/:productID", deleteProductfromCart);
module.exports = router;
