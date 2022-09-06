const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes.js"));
app.use("/api/product", require("./routes/productRoutes.js"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
