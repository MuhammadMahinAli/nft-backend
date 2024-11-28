import {Schema, model} from "mongoose";

const ProductSchema = new Schema(
  {
    productID: {
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
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    collections: [
      {
        type: {
          name: {
            type: String,
            required: true,
          },
          collectionID: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Collection",
          },
        },
        required: true,
      },
    ],
    colors: [
      {
        type: {
          name: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      },
    ],
    sizes: [
      {
        type: {
          size: {
            type: String,
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        },
      },
    ],
    owners: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    ],
    versions: [
      {
        type: {
          name: {
            type: String,
            required: true,
            enum: ["NFT", "OffPrint", "VR", "AR"],
          },
          versionID: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Version",
          },
          price: {
            type: Number,
            required: true,
          },
        },
        required: true,
      },
    ],

    totalViews: {
      type: Number,
      default: 0,
    },
    image: {type: String},
    volume: {
      type: String,
    },
    addedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    addStatus: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected"],
    },
    market_X: {
      type: Boolean,
      required: true,
    },
    requestRecycle: {
      type: Boolean,
      default: false,
    },
    onAuction: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Boolean,
      default: false,
    },
    availability: {
      type: Boolean,
      required: true,
    },
    soldAt: {
      type: String,
    },
    hasOffers: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//create product model
export const Product = model("Product", ProductSchema);
