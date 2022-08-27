const User = require("../models/userModel");

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  if (user) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && password == user.password) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Wrong Password or Email");
  }
};

module.exports = { registerUser, loginUser };
