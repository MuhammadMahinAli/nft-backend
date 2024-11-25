import {z} from "zod";

export const addORDeleteProductToWishlistZodSchema = z.object({
  body: z
    .object({
      user: z.string({
        required_error: "requestedBy is required",
      }),
      product: z.string({
        required_error: "product is required",
      }),
      add: z.boolean({
        required_error: "add is required",
      }),
    })
    .strict(),
});
