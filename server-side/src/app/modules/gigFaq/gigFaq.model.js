import {Schema, model} from "mongoose";

const GigFaqSchema = new Schema(
  {
    gig: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Gig",
    },

    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create GigFaq model
export const GigFaq = model("GigFaq", GigFaqSchema);
