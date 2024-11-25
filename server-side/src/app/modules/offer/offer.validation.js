import {z} from "zod";
const offerEnum = ["product", "collection", "trait"];
export const createOfferZodSchema = z.object({
  body: z
    .object({
      item: z.string({
        required_error: "item is required",
      }),
      quantity: z.number({required_error: "Quantity is required"}),
      price: z.number({required_error: "price is required"}),
      offerBasedOn: z.enum([...offerEnum], {required_error: "offer based on is required"}),
      bidders: z.array(z.string()).optional(),
      endedAt: z.string({
        required_error: "endedAt is required",
      }),
      madeBy: z.string({
        required_error: "madeBy is required",
      }),
    })
    .strict(),
});
