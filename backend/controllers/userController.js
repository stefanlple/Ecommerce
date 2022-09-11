const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await User.create({
    name: name,
    email: email,
    role: role,
    password: hashedPassword,
  });

  if (user) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWTToken(user.id),
      user: user,
    });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateJWTToken(user.id),
      user: user,
    });
  } else {
    res.status(400);
    throw new Error("Wrong Password or Email");
  }
};

const getUser = (req, res) => {
  /* try {
    res.status(201);
    res.json(req.user);
  } catch (error) {
    console.log(error);
    res.status(401);
  } */
  res.status(200);
  res.json(req.user);
};

const generateJWTToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRETKEY, { expiresIn: "60d" });
};

module.exports = { registerUser, loginUser, getUser };
