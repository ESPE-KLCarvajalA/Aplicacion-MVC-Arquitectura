let users = [];

const getAllUsers = () => users;

const addUser = (user) => {
  users.push(user);
};

module.exports = {
  getAllUsers,
  addUser
};
