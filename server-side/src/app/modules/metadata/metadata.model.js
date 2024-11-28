import {Schema, model} from "mongoose";

const MetaDataSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    artist: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    image: {
      type: String,
      required: true,
    },
    external_url: {
      type: String,
      required: true,
    },
    attributes: [
      {
        traitType: {
          type: String,
          required: true,
        },
        value: {
          type: String,
          required: true,
        },
      },
    ],
    artistPhone: {
      type: String,
      required: true,
    },
    artistEmail: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create metadata model
export const MetaData = model("MetaData", MetaDataSchema);
