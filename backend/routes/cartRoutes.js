const express = require("express");
const { auth, authRoles } = require("../middleware/authUser");

const router = express.Router();

router.get("/");
module.exports = router;
