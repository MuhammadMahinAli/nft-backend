import { Schema, model } from "mongoose";

const OfferInfoSchema = new Schema(
  {
    sellId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SellList",
      index: true,
    },
    offerAddress: { type: String },
    offerPrice: { type: Number },
    isAccepted: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

//create OfferInfo model
export const OfferInfo = model("OfferInfo", OfferInfoSchema);
