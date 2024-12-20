import { Schema, model } from "mongoose";

const SellListSchema = new Schema(
  {
    seller: { 
      type: Schema.Types.ObjectId,
      ref: "User" },
    token: { type: String },
    tokenId: { type: Number },
    amountOfToken: { type: Number },
    deadline: { type: Date },
    price: { type: Number },
    isSold: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

//create SellList model
export const SellList = model("SellList", SellListSchema);
