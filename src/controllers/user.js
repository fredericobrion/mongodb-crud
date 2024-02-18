const service = require("../services/user");

const createUser = async (req, res) => {
  const { name, blog, age, location } = req.body;

  const user = await service.createUser(name, blog, age, location);

  return user === "Error creating user."
    ? res.status(400).json({ message: user })
    : res.status(201).json(user);
};

const getUsers = async (req, res) => {
  const users = await service.getUsers();

  return users === "Error getting users."
    ? res.status(400).json({ message: users })
    : res.status(200).json(users);
};

const findUsersByField = async (req, res) => {
  const { field, value } = req.params;

  const user = await service.findUserByField(field, value);

  return user === "Error getting user."
    ? res.status(400).json({ message: user })
    : res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  const user = await service.updateUser(id, updatedUser);

  return user === "Error updating user."
    ? res.status(400).json({ message: user })
    : res.status(200).json(user);
}

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await service.getUserById(id);

  return user === "Error getting user."
    ? res.status(400).json({ message: user })
    : res.status(200).json(user);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const deleted = await service.deleteUser(id);

  return deleted === "Error deleting user."
    ? res.status(400).json({ message: deleted })
    : res.status(202).json({ message: deleted });
};

module.exports = {
  createUser,
  getUsers,
  findUsersByField,
  updateUser,
  getUserById,
  deleteUser,
};
