import httpStatus from "http-status";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";
import {addNotificationService, changeStatusNotificationService, deleteNotificationService, getAllNotificationService, getNotificationByUserIdService, getSingleNotificationService} from "./notification.service.js";

//-----add notification
export const addNotification = catchAsync(async (req, res, next) => {
  const data = req.body;
  const result = await addNotificationService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notification created successfully!",
    data: result,
  });
});
//-----get single notification
export const getSingleNotification = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getSingleNotificationService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notification retrieved successfully!",
    data: result,
  });
});
//-----get notifications by user id
export const getNotificationByUserId = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getNotificationByUserIdService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notifications retrieved successfully!",
    data: result,
  });
});
//-----get all notification
export const getAllNotification = catchAsync(async (req, res, next) => {
  const result = await getAllNotificationService();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notifications retrieved successfully!",
    data: result,
  });
});
//-----delete notification
export const deleteNotification = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await deleteNotificationService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notification deleted successfully!",
    data: result,
  });
});
//-----update status of notification
export const updateStatus = catchAsync(async (req, res, next) => {
  const {id, read} = req.body;
  const result = await changeStatusNotificationService(id, read);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Notification updated successfully!",
    data: result,
  });
});
