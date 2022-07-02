const User = require("../models/User");

const getUsers = async (req, res) => {
  const users = await User.find();

  try {
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};

const createUser = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, { new: true });

  try {
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const removedUser = await User.remove({ _id: req.params.id });
    res.status(200).json(removedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
