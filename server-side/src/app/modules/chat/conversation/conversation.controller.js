import httpStatus from "http-status";
import {deleteConversationService, getConversationByParticipantsService, getConversationsByDesignerService} from "./conversation.service.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import { catchAsync } from "../../../../utils/catchAsync.js";

export const getConversationsByDesigner = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await getConversationsByDesignerService(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Conversations retrived successfully!",
    data: result,
  });
});
export const getConversationByParticipants = catchAsync(async (req, res, next) => {
  const {user, designer} = req.query;
  const result = await getConversationByParticipantsService(user, designer);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Conversation retrived successfully!",
    data: result,
  });
});
export const deleteConversation = catchAsync(async (req, res, next) => {
  const {user, designer} = req.body;
  const result = await deleteConversationService(user, designer);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Conversation deleted successfully!",
    data: result,
  });
});
