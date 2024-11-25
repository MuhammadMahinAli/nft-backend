import {Schema, model} from "mongoose";

const NotificationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    for: {
      type: String,
      required: true,
      enum: ["all", "one"],
    },
    user: {
      type: Schema.Types.ObjectId || null,
      ref: "User",
      default: null,
    },
    message: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
    extra: {
      type: Object,
    },
  },
  {
    timestamps: true,
  }
);

//create notification model
export const Notification = model("Notification", NotificationSchema);
