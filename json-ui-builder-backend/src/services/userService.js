const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const appConfig = require('../config/appConfig');

exports.register = async (userData) => {
  const existingUser = await UserModel.findUserByEmail(userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const userId = await UserModel.createUser(userData);
  return { userId, message: 'User registered successfully' };
};

exports.login = async (loginData) => {
  const user = await UserModel.findUserByEmail(loginData.email);
  if (!user) {
    throw new Error('Invalid email or password');
  }

  const isPasswordValid = await require('bcryptjs').compare(loginData.password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user.id, email: user.email }, appConfig.jwtSecret, { expiresIn: '1h' });
  return token;
};

exports.getAllUsers = async () => {
  return await UserModel.getAllUsers();
};

exports.getUserById = async (id) => {
  const user = await UserModel.findUserById(id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
};

exports.createUser = async (userData) => {
  const existingUser = await UserModel.findUserByEmail(userData.email);
  if (existingUser) {
    throw new Error('User already exists');
  }
  const userId = await UserModel.createUser(userData);
  return { userId, message: 'User created successfully' };
};

exports.updateUser = async (id, userData) => {
  const user = await UserModel.findUserById(id);
  if (!user) {
    throw new Error('User not found');
  }
  await UserModel.updateUser(id, userData);
  return { id, message: 'User updated successfully' };
};

exports.deleteUser = async (id) => {
  const user = await UserModel.findUserById(id);
  if (!user) {
    throw new Error('User not found');
  }
  await UserModel.deleteUser(id);
};
