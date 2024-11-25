import {Schema, model} from "mongoose";

const CollectionSchema = new Schema(
  {
    collectionID: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
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
    quantity: {
      type: Number,
      default: 0,
    },
    totalMinted: {
      type: Number,
      default: 0,
    },
    mintedRecentMonth: {
      type: Number,
      default: 0,
    },
    mintedAt: {
      type: String,
    },
    currency: [{type: String}],
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    drop: {
      type: Schema.Types.ObjectId,
      ref: "Drop",
    },
    traits: [
      {
        type: String,
        required: true,
      },
    ],
    hasOffers: {
      type: Boolean,
      default: false,
    },
    owners: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create Collection model
export const Collection = model("Collection", CollectionSchema);
