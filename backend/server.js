const express = require("express");
const connectDB = require("./config/db");
const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", require("./routes/userRoutes.js"));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
