import {z} from "zod";

export const addORDeleteProductToRecycleZodSchema = z.object({
  body: z
    .object({
      requestedBy: z.string({
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
