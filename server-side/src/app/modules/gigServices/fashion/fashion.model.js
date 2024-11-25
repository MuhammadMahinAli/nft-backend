import {Schema, model} from "mongoose";

const FashionSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },

    title: {
      type: String,
      default: "Fashion Illustration",
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
    illustrationPurposes: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create Fashion model
export const Fashion = model("Fashion", FashionSchema);
