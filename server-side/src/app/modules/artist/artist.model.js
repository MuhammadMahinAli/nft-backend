import {Schema, model} from "mongoose";

const ArtistSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    address: {
      type: String,
      required: true,
    },
    createDateOfArt: {
      type: String,
      required: true,
    },
    document: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

//create artist model
export const Artist = model("Artist", ArtistSchema);
