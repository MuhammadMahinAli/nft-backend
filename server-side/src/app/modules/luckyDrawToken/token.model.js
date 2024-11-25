import {Schema, model} from "mongoose";

const LuckyDrawTokenSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    luckyDraw: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "LuckyDraw",
    },

    token: {
      type: String,
      required: true,
      unique: true,
    },
    spinNumber: {
      type: Number,
      required: true,
    },
    alreadySpinned: {
      type: Number,
      default: 0,
      //   required: true,
    },
    spinComplete: {
      type: Boolean,
      //   required: true,
      default: false,
    },
    expiresAt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

//create luckyDraw token model
export const LuckyDrawToken = model("LuckyDrawToken", LuckyDrawTokenSchema);
