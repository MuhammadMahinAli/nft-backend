import { Schema, model } from "mongoose";

const AuctionInfoSchema = new Schema(
  {
    creator: { type: String },
    token: { type: String },
    highestBidder: { type: String },
    tokenId: { type: Number },
    amountOfToken: { type: Number },
    highestBid: { type: Number },
    startPrice: { type: Number },
    minIncrement: { type: Number },
    startDate: { type: Date },
    duration: { type: Number },
    action: {
      type: String,
      enum: ["RESERVED", "STARTED"],
    },
  },
  {
    timestamps: true,
  }
);

//create AuctionInfo model
export const AuctionInfo = model("AuctionInfo", AuctionInfoSchema);
