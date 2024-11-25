import {Schema, model} from "mongoose";

const DesignerEarningSchema = new Schema(
  {
    designer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    availableBalance: {
      type: Number,
      // required: true,
      default: 0,
    },
    totalEarnings: {
      type: Number,
      // required: true,
      default: 0,
    },
    totalExpanse: {
      type: Number,
      // required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

//create DesignerEarning model
export const DesignerEarning = model("DesignerEarning", DesignerEarningSchema);
