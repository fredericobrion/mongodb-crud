const User = require("../models/user");

const createUser = async (name, blog, age, location) => {
  try {
    const newUser = new User({ name, blog, age, location });

    await newUser.save();

    return newUser;
  } catch (e) {
    console.log(e);
    return "Error creating user.";
  }
};

const getUsers = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (e) {
    console.log(e);
    return "Error getting users.";
  }
};

const findUserByField = async (field, value) => {
  try {
    const user = await User.find({ [field]: value });
    return user;
  } catch (e) {
    console.log(e);
    return "Error getting user.";
  }
};

const updateUser = async (id, updatedUser) => {
  try {
    const updated = await User.findByIdAndUpdate(id, updatedUser, {
      new: true,
    });
    return updated;
  } catch (e) {
    console.log(e);
    return "Error updating user.";
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (e) {
    console.log(e);
    return "Error getting user.";
  }
};

const deleteUser = async (id) => {
  try {await User.findByIdAndDelete(id);
    return "User deleted.";
  } catch (e) {
    console.log(e);
    return "Error deleting user.";
  }
};

module.exports = {
  createUser,
  getUsers,
  findUserByField,
  updateUser,
  getUserById,
  deleteUser,
};
