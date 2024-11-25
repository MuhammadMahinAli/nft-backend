import {Schema, model} from "mongoose";

const CartSchema = new Schema(
  {
    products: [
      {
        productID: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
//create cart model
export const Cart = model("Cart", CartSchema);
