import {Schema, model} from "mongoose";

const WishListSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    products: [
      {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);

//create WishList model
export const WishList = model("WishList", WishListSchema);
