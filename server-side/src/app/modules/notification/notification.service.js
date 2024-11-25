import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {Notification} from "./notification.model.js";

//--------add new notification
export const addNotificationService = async (data) => {
  const notification = await Notification.create(data);
  if (!notification) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Unable to create notification");
  }

  return notification;
};

//--------find single notification
export const getSingleNotificationService = async (id) => {
  const notification = await Notification.findOne({_id: id});
  return notification;
};
//--------change notification status
export const changeStatusNotificationService = async (id, read) => {
  const notification = await Notification.findOne({_id: id});
  if (!notification) {
    throw new ApiError(httpStatus.NOT_FOUND, "Notification not found");
  }
  const result = await Notification.findOneAndUpdate({_id: id}, {read: read}, {new: true});
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Notification couldn't be updated");
  }
  return result;
};

//--------delete  notification
export const deleteNotificationService = async (id) => {
  const notification = await Notification.findOneAndDelete({_id: id});
  return notification;
};

//---------get all notification
export const getAllNotificationService = async () => {
  const notification = await Notification.find({}).sort({createdAt: -1});
  return notification;
};
//---------get notification by user id
export const getNotificationByUserIdService = async (id) => {
  const notification = await Notification.find({user: id}).sort({createdAt: -1});
  return notification;
};
