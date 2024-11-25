import {Schema, model} from "mongoose";

const MessageSchema = new Schema(
  {
    sender: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    receiver: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    message: {
      type: String,
      required: true,
    },
    conversation: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Conversation",
    },
  },
  {
    timestamps: true,
  }
);

//create Message model
export const Message = model("Message", MessageSchema);
