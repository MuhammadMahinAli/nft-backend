import {Schema, model} from "mongoose";

const DesignerDetailsSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    displayName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    bannerImg: {
      type: String,
    },
    description: {
      type: String,
    },
    profession: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    hobbies: [
      {
        type: String,
      },
    ],
    languages: [
      {
        type: String,
      },
    ],
    level: {
      type: String,
      enum: ["0", "1", "2", "3", "4"],
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerDetails model
export const DesignerDetails = model("DesignerDetails", DesignerDetailsSchema);
