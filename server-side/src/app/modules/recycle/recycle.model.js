import {Schema, model} from "mongoose";

const RecycleSchema = new Schema(
  {
    requestedBy: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    products: [
      {
        type: {
          productID: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Product",
          },
          addedAt: {
            type: Date,
            default: new Date(Date.now()),
          },
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
// RecycleSchema.products.index({expireAt: 1}, {expireAfterSeconds: 20});
//create Recycle model
export const Recycle = model("Recycle", RecycleSchema);
