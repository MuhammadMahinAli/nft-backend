import { Schema, model } from "mongoose";

const NFTActivitySchema = new Schema(
  {
    nftId: {
      type: Schema.Types.ObjectId,
      ref: "NFT", 
      required: true,
    },
    activityType: {
      type: String,
      enum: ["Mint", "Transfer", "List", "Sale", "Cancel Listing"],
      required: true,
    },
    from: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    currency: {
      type: String,
      default: "ETH",
    },
    percentageFromFloor: {
      type: Number,
      default: null,
    },
    time: {
      type: Date, 
      required: true,
    },
    transactionLink: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

//create NFTActivity model
export const NFTActivity = model("NFTActivity", NFTActivitySchema);
