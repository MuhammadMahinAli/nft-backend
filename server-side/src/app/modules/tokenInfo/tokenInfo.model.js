import { Schema, model } from "mongoose";

const TokenInfoSchema = new Schema(
  {
    tokenId: {
      type: Number,
      required: true,
      unique: true, // Ensures each tokenId is unique
    },
    blockchain: {
      type: String,
      required: true,
      enum: ["Ethereum", "Polygon", "Binance Smart Chain", "Solana"], // Add more blockchains as needed
      default: "Ethereum",
    },
    tokenOfNft: {
      type: Schema.Types.ObjectId,
      ref: "NFT",
    },
    tokenStandard: {
      type: String,
      required: true,
      enum: ["ERC 721", "ERC 1155", "ERC 20"], // For Ethereum-based tokens
      default: "ERC 721",
    },
    contractAddress: {
      type: String,
      required: true,
      //match: /^0x[a-fA-F0-9]{40}$/, // Ensures it's a valid Ethereum address
    },
    royalty: {
      type: Number,
      default: 0,
      min: 0,
      max: 100, // Royalty percentage (0-100%)
    },
  },

  {
    timestamps: true,
  }
);

//create TokenInfo model
export const TokenInfo = model("TokenInfo", TokenInfoSchema);
