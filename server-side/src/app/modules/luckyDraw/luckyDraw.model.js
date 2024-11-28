import {Schema, model} from "mongoose";

const LuckyDrawSchema = new Schema(
  {
    luckyDrawID: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
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
          addedBy: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
        },
      },
    ],
    winner: {
      type: Schema.Types.ObjectId || null,
      ref: "User",
      default: null,
    },
    participants: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create luckyDraw model
export const LuckyDraw = model("LuckyDraw", LuckyDrawSchema);
