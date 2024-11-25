import httpStatus from "http-status";
import {createMessageService, deleteMessageService, getMessagesByConversationService} from "./message.service.js";
import {catchAsync} from "../../../../utils/catchAsync.js";
import {sendResponse} from "../../../../utils/sendResponse.js";

export const sendMessage = catchAsync(async (req, res, next) => {
  const result = await createMessageService(req?.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message send successfully!",
    data: result,
  });
});
export const getMessagesByConversation = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getMessagesByConversationService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Messages retrived successfully!",
    data: result,
  });
});
export const deleteMessage = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await deleteMessageService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Message deleted successfully!",
    data: result,
  });
});
