import { Schema, model } from "mongoose";

const NFTCollectionSchema = new Schema(
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
      required: true,
    },
    tokenDetails: {
      type: Schema.Types.ObjectId,
      ref: "TokenInfo",
    },
    ownerList: [
      {
        type: String,
      },
    ],
    allNft: [
      {
        nft: {
          type: Schema.Types.ObjectId,
          ref: "NFT",
          required: true,
        },
      },
    ],
    seller: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

//create NFTCollection model
export const NFTCollection = model("NFTCollection", NFTCollectionSchema);
