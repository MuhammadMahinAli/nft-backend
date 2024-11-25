import {Schema, model} from "mongoose";

const DropSchema = new Schema(
  {
    collectionID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Collection",
    },
    totalMinted: {
      type: Number,
      default: 0,
    },

    allowList: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create Drop model
export const Drop = model("Drop", DropSchema);
