import {Schema, model} from "mongoose";

const DesignerEducationSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    country: {
      type: String,
      required: true,
    },
    institution: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    major: {
      type: String,
      required: true,
    },

    year: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerEducation model
export const DesignerEducation = model("DesignerEducation", DesignerEducationSchema);
