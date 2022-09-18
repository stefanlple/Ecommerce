const express = require("express");
const {
  registerCart,
  updateCart,
  deleteCart,
  deleteProductfromCart,
} = require("../controllers/cartController");
const { auth, authRoles } = require("../middleware/authUser");

const router = express.Router();

router.post("/add", auth, registerCart);
router.get("/delete/:cartId", deleteCart);
router.get("/add/:cartId", updateCart);
router.get("/delete/:cartId/:productID", deleteProductfromCart);
module.exports = router;
