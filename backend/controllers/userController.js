const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  res.json({ message: "registerUser" });
};

const loginUser = (req, res) => {
  res.json({ message: "loginUser" });
};

module.exports = { registerUser, loginUser };
