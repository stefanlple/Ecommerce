const registerUser = (req, res) => {
  res.json({ message: "registerUser" });
};

const loginUser = (req, res) => {
  res.json({ message: "loginUser" });
};

module.exports = { registerUser, loginUser };
