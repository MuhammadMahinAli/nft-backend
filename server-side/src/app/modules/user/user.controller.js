import {createUserService, deleteUserService, getAllUserService, getSingleUserService, updateUserService} from "./user.service.js";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import httpStatus from "http-status";
import { User } from "./user.model.js";

//------create an user
export const createUser = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newUser = await createUserService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully!",
    data: newUser,
  });
});
// //-------get all users
// export const getAllUsers = catchAsync(async (req, res) => {
//   const users = await getAllUserService();

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Users retrieved successfully!",
//     data: users,
//   });
// });

export const getAllUsers = catchAsync(async (req, res) => {
  const { role } = req.user;
  
  const users = await getAllUserService(role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrieved successfully!',
    data: users,
  });
});

//------get single user
export const getSingleUser = catchAsync(async (req, res) => {
  const email = req.params.email;

  const user = await getSingleUserService(email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User retrieved successfully!",
    data: user,
  });
});
//-------update user
export const updateUser = catchAsync(async (req, res) => {
  const id = req.params.id;
  const updatedData = req?.body;
  const updatedUser = await updateUserService(id, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User updated successfully!",
    data: updatedUser,
  });
});
//-------delete user
export const deleteUser = catchAsync(async (req, res) => {
  const id = req.params.id;

  const user = await deleteUserService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "user deleted successfully!",
    data: user,
  });
});
