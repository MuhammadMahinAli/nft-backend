import {Schema, model} from "mongoose";

const GigPackageSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },
    packageName: {
      type: String,

      enum: ["Basic", "Standard", "Premium"],
    },
    title: {
      type: String,

    },
    description: {
      type: String,

    },
    deliveryTime: {
      type: String,
 
    },
    revisions: {
      type: Number,

    },
    price: {
      type: Number,
   
    },
  },
  {
    timestamps: true,
  }
);

//create GigPackage model
export const GigPackage = model("GigPackage", GigPackageSchema);
