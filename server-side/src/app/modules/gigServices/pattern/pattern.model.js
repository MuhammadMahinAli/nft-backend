import {Schema, model} from "mongoose";

const PatternSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },

    title: {
      type: String,
      default: "Pattern Making",
    },
    itemType: {
      type: String,
      required: true,
    },
    softwares: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create Pattern model
export const Pattern = model("Pattern", PatternSchema);
