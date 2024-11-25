import {Schema, model} from "mongoose";

const GigReviewSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },
    buyer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    gigOrder: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "GigOrder",
    },
    review: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create GigReview model
export const GigReview = model("GigReview", GigReviewSchema);
