import {Schema, model} from "mongoose";

const GigSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: "Fashion",
    },
    tags: [
      {
        type: String,
      },
    ],

    serviceType: {
      type: String,
      required: true,
      enum: ["Technical Drawing and Tech Pack", "Fashion Illustration", "3D Garment Design", "Pattern Making", "Full Design Process"],
    },
    video: {
      type: String,
      // required: true,
    },
    document: {
      type: String,
    },
    images: [
      {
        type: String,
      },
    ],
    extraFastDelivery: {
      type: Boolean,
      required: true,
      default: false,
    },
    additionalItems: {
      type: Boolean,
      required: true,
      default: false,
    },
    additionalColorWay: {
      type: Boolean,
      required: true,
      default: false,
    },
    additionalRevision: {
      type: Boolean,
      required: true,
      default: false,
    },
    includeMoodBoard: {
      type: Boolean,
      required: true,
      default: false,
    },
    technicalDrawing: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//create Gig model
export const Gig = model("Gig", GigSchema);
