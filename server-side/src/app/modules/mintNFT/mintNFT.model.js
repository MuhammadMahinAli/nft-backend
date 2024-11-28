import {Schema, model} from "mongoose";

const MintNFTSchema = new Schema(
  {
    item: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Product" || "Collection",
    },
    itemType: {
      type: String,
      required: true,
      enum: ["product", "collection"],
    },
    artist: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      // required: true,
    },
    artistName: {
      type: String,
    },
    artistAddress: {
      type: String,
    },
    artistPhone: {
      type: String,
    },
    nidOFArtist: {
      type: String,
    },

    certified: {
      type: Boolean,
      required: true,
    },
    certificate: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//create MintNFT model
export const MintNFT = model("MintNFT", MintNFTSchema);
