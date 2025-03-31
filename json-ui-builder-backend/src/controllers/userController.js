const userService = require('../services/userService');
const responseHandler = require('../utils/responseHandler');

exports.register = async (req, res, next) => {
  try {
    const user = await userService.register(req.body);
    responseHandler.success(res, user);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const token = await userService.login(req.body);
    responseHandler.success(res, { token });
  } catch (error) {
    next(error);
  }
};

// Dummy API for mock user details
exports.getMockUserDetails = (req, res) => {
  const mockUser = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "user"
  };
  responseHandler.success(res, mockUser);
};

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    responseHandler.success(res, users);
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user) {
      return responseHandler.error(res, 'User not found', 404);
    }
    responseHandler.success(res, user);
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    responseHandler.success(res, user, 201);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    responseHandler.success(res, user);
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    responseHandler.success(res, null, 204);
  } catch (error) {
    next(error);
  }
};