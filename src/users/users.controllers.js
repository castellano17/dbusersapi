const Users = require("../models/users.model");

const findAllUsers = async () => {
  const users = await Users.findAll();
  return users;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });
  return data;
};

const createUser = async (userObj) => {
  const newUser = await Users.create({
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
  });
  return newUser;
};

const updateUser = async (id, userObj) => {
  const userSelected = await Users.findOne({
    where: {
      id: id,
    },
  });
  if (!userSelected) return null;
  const modifiedUser = await userSelected.update(userObj);

  // const user = await Users.update(userObj, {
  //   where: {
  //     id: id,
  //   },
  // });
  return modifiedUser;
};

const deleteUser = async (id) => {
  const user = await Users.destroy({
    where: {
      id: id,
    },
  });
  return user;
};

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
};
