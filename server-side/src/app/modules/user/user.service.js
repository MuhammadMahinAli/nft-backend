import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {User} from "./user.model.js";

// create user / signUp user
export const createUserService = async (userInfo) => {
  const result = (await User.create(userInfo)).toObject();
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create user");
  }
  const {password, ...newUser} = result;
  return newUser;
};

///get all users
export const getAllUserService = async () => {
  const users = await User.find({});
  return users;
};

//get single user
export const getSingleUserService = async (email) => {
  const user = await User.findOne({email});
  return user;
};
//update user
export const updateUserService = async (id, payload) => {
  const isExist = await User.findOne({_id: id});
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, "User doesn't found");
  }
  const {name, ...userData} = payload;

  const updatedUserData = {...userData};
  //updated nested field name
  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach((key) => {
      const nameKey = `name.${key}`; // `name.fisrtName`
      updatedUserData[nameKey] = name[key];
    });
  }

  const result = await User.findOneAndUpdate({_id: id}, updatedUserData, {
    new: true,
  });
  return result;
};

//delete user
export const deleteUserService = async (id) => {
  const result = await User.findByIdAndDelete({_id: id});
  return result;
};
