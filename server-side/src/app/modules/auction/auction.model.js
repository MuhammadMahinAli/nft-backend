import {Schema, model} from "mongoose";

const AutionSchema = new Schema(
  {
    product: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    collectionID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Collection",
    },

    endedAt: {
      type: String,
      required: true,
    },
    bidders: [
      {
        type: {
          user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User",
          },
          bid: {
            type: Number,
            required: true,
          },
        },
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

//create auction model
export const Auction = model("Auction", AutionSchema);
