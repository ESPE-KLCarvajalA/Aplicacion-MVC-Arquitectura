const userModel = require('../models/userModel');

const showUsers = (req, res) => {
  const users = userModel.getAllUsers();
  res.render('index', { users });
};

const createUser = (req, res) => {
  const { name } = req.body;
  if (name) {
    userModel.addUser({ name });
  }
  res.redirect('/');
};

module.exports = {
  showUsers,
  createUser
};
