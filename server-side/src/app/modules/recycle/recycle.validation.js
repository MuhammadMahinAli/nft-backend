import {z} from "zod";

export const createRecycleZodSchema = z.object({
  body: z
    .object({
      requestedBy: z.string({
        required_error: "requestedBy is required",
      }),
      productID: z.string({
        required_error: "productID is required",
      }),
      productImg: z.string({
        required_error: "productImg is required",
      }),

      recyclePrice: z.number().optional(),
    })
    .strict(),
});
