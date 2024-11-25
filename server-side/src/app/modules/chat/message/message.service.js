import httpStatus from "http-status";
import {ApiError} from "../../../../handleError/apiError.js";
import {Conversation} from "../conversation/conversation.model.js";
import {Message} from "./message.model.js";

//----------create a new message
export const createMessageService = async (payload) => {
  const {sender, receiver, message} = payload;
  // Check if a conversation already exists between sender and receiver
  let conversation = await Conversation.findOne({
    $or: [
      {user: sender, designer: receiver},
      {user: receiver, designer: sender},
    ],
  });
  // If no conversation exists, create a new one
  if (!conversation) {
    conversation = await Conversation.create({
      user: sender,
      designer: receiver,
    });
  }
  // Create a new message
  const newMessage = await Message.create({
    sender,
    receiver,
    message,
    conversation: conversation?._id,
  });

  if (!newMessage) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to send message");
  }

  return newMessage;
};

export const getMessagesByConversationService = async (conversation) => {
  const messages = await Message.find({conversation});
  return messages;
};

export const deleteMessageService = async (id) => {
  const result = await Message.findOneAndDelete({_id: id});
  return result;
};
