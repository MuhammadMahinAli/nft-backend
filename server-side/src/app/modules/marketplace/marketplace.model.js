import { Schema, model } from "mongoose";

const MarketPlaceSchema = new Schema(
  {
    admin: { type: String, required: true },
    marketplaceFee: { type: Number },
    recipient: [{ type: String }],
    fee: [{ type: Number }],
    recipientCount: { type: Number },
    sales: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SellList",
        index: true,
      },
    ],
    salesId: { type: Number },
    offerInfo: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Offer",
        index: true,
      },
    ],
    offerCount: { type: Object },
    escrowAmount: { type: Object },
    auction: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Auction",
        index: true,
      },
    ],
    auctionId: { type: Number },
  },
  {
    timestamps: true,
  }
);

//create MarketPlace model
export const MarketPlace = model("MarketPlace", MarketPlaceSchema);
