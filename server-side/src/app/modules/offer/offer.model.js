import {Schema, model} from "mongoose";

const OfferSchema = new Schema(
  {
    item: {
      type: Schema.Types.Mixed,
      required: true,
      ref: "Product" || "Collection",
    },

    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    endedAt: {
      type: String,
      required: true,
    },
    offerBasedOn: {
      type: String,
      enum: ["product", "collection", "trait"],
      required: true,
    },
    bidders: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    madeBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//create offer model
export const Offer = model("Offer", OfferSchema);
