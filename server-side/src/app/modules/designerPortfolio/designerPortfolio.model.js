import {Schema, model} from "mongoose";

const DesignerPortfolioSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
    liveLink: {
      type: String,
      //   required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerPortfolio model
export const DesignerPortfolio = model("DesignerPortfolio", DesignerPortfolioSchema);
