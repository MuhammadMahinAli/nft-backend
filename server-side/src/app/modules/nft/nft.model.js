import { Schema, model } from "mongoose";

const NFTSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    dashboard: {
      type: String,
      required: true
    },
    tokenDetails: {
      type: Schema.Types.ObjectId,
      ref: "TokenInfo",
    },
    seller: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

//create NFT model
export const NFT = model("NFT", NFTSchema);
