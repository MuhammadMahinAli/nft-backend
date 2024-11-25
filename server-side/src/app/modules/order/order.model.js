import {Schema, model} from "mongoose";

const OrderSchema = new Schema(
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
        collectionID: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Collection",
        },
        sku: {
          type: String,
          required: true,
        },
      },
    ],

    totalPrice: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      // required: true,
    },
    payment: {
      type: String,
      enum: ["unpaid", "fully paid", "partially paid"],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "ready to ship", "minted", "delivered", "cancelled"],
      default: "pending",
    },
    orderedBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

//create Order model
export const Order = model("Order", OrderSchema);
