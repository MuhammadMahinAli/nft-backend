import { Schema, model } from "mongoose";

const MarketPlaceSchema = new Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    marketplaceFee: { type: Number },
    recipient: [{ type: String }],
    fee: [{ type: Number }],
    recipientCount: { type: Number },
    sales: [{
      sellList:{
        type: Schema.Types.ObjectId,
        ref: "SellList",
        index: true,
      },
    }
    ],
    salesId: { type: Number },
    offerInfo: [
      {
        type: Schema.Types.ObjectId,
        ref: "OfferInfo",
        index: true,
      },
    ],
    offerCount: { type: Object },
    escrowAmount: { type: Object },
    auction: [
      {
        type: Schema.Types.ObjectId,
        ref: "AuctionInfo",
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
