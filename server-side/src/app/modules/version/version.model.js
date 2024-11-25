import {Schema, model} from "mongoose";

const VersionSchema = new Schema(
  {
    versionID: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
      enum: ["NFT", "OffPrint", "VR", "AR"],
    },

    description: {
      type: String,
      required: true,
    },

    products: [
      {
        type: {
          productID: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          price: {
            type: Number,
            required: true,
          },
          status: {
            type: String,
            enum: ["In stock", "Out of stock"],
          },
          weight: {
            type: String,
          },
          dimension: {
            type: String,
          },
          chain: {
            type: String,
          },
          supplyChain: {
            type: String,
          },
          image: {
            type: String,
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create version model
export const Version = model("Version", VersionSchema);
