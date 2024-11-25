import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {Conversation} from "./conversation.model.js";
import {getMessagesByConversationService} from "../message/message.service.js";
import {Message} from "../message/message.model.js";
import mongoose from "mongoose";

export const getConversationsByDesignerService = async (designer) => {
  const conversations = await Conversation.find({designer}).populate("user").populate("designer");
  return conversations;
};

export const getConversationByParticipantsService = async (user, designer) => {
  const conversation = await Conversation.findOne({user, designer}).populate("user").populate("designer");
  return conversation;
};
//delete conversation
export const deleteConversationService = async (user, designer) => {
  let result = null;
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const conversation = await Conversation.findOne({user, designer});
    if (!conversation) {
      throw new ApiError(httpStatus.NOT_FOUND, "Conversation doesn't found");
    }
    const messages = await getMessagesByConversationService(conversation?._id);
    await Promise.all(
      messages.map(async (message) => {
        await Message.findOneAndDelete({conversation: conversation?._id}).session(session);
      })
    );
    result = await Conversation.findOneAndDelete({user, designer}).session(session);
    await session.commitTransaction();
    await session.endSession();
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
  return result;
};
