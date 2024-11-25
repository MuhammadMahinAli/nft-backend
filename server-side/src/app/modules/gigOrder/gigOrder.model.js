import {Schema, model} from "mongoose";

const GigOrderSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },
    buyer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    serviceType: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Processing", "Complete", "Cancelled"],
      default: "Processing",
    },
    payment: {
      type: String,
      enum: ["Unpaid", "Paid"],
      default: "Unpaid",
    },
  },

  {
    timestamps: true,
  }
);

//create GigOrder model
export const GigOrder = model("GigOrder", GigOrderSchema);
