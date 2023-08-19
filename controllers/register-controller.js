
const loginuser = require("../models/login-schema");

// const Home = (req, res) => {
//   res.render("index");
// };

// const Login = (req, res) => {
//   res.render("login");
// };

// const Register = (req, res) => {
//   res.render("register");
// };

const admin= (req, res) => {
  model.create(req.body);
  let user = loginuser.findOne({ username: req.body.username });
  if (user) res.status(404).render("login");

  res.status(201).send("User added successfully");
};

module.exports = { Home, Login, Register, admin };