const registerUser = async (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;
  res.json({ message: "registerUser" });
};

const loginUser = (req, res) => {
  res.json({ message: "loginUser" });
};

module.exports = { registerUser, loginUser };
