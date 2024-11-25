import {Schema, model} from "mongoose";

const MintNFTSchema = new Schema(
  {
    artist: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    supply: {
      type: Number,
      // required: true,
    },

    listed: {
      type: Boolean,
      // required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//create MintNFT model
export const MintNFT = model("MintNFT", MintNFTSchema);
