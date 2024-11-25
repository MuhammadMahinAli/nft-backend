import {Schema, model} from "mongoose";

const ConversationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//create Conversation model
export const Conversation = model("Conversation", ConversationSchema);
