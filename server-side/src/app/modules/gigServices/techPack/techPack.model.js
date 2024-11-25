import {Schema, model} from "mongoose";

const TechPackSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },

    title: {
      type: String,
      default: "Technical Drawing and Tech Pack",
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
    fileFormat: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create TechPack model
export const TechPack = model("TechPack", TechPackSchema);
