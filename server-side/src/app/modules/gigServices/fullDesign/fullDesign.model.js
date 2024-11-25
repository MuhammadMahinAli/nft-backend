import {Schema, model} from "mongoose";

const FullDesignSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },

    title: {
      type: String,
      default: "Full Design Process",
    },
    itemType: {
      type: String,
      required: true,
    },
    genderGroup: [
      {
        type: String,
      },
    ],
    designExpertises: [
      {
        type: String,
      },
    ],
    tailoringMethod: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//create FullDesign model
export const FullDesign = model("FullDesign", FullDesignSchema);
