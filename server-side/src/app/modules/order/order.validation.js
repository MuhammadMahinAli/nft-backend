import {z} from "zod";
const payment = ["unpaid", "fully paid", "partially paid"];
const status = ["pending", "ready to ship", "minted", "delivered", "cancelled"];
export const createOrderZodSchema = z.object({
  body: z
    .object({
      products: z.array(
        z.object({
          productID: z.string({required_error: "productID is required"}),
          price: z.number({required_error: "price is required"}),
          quantity: z.number({required_error: "quantity is required"}),
          collectionID: z.string({required_error: "collectionID is required"}),
          sku: z.string({required_error: "sku is required"}),
        })
      ),
      orderedBy: z.string({
        required_error: "orderedBy is required",
      }),

      payment: z.enum([...payment], {required_error: "payment is required!"}),
      rating: z.number().optional(),
    })
    .strict(),
});
//
export const updateOrderZodSchema = z.object({
  body: z
    .object({
      payment: z.enum([...payment]).optional(),
      status: z.enum([...status]).optional(),
    })
    .strict(),
});
