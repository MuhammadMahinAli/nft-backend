import {z} from "zod";

export const createLuckyDrawZodSchema = z.object({
  body: z
    .object({
      description: z.string({
        required_error: "Description is required",
      }),
      title: z.string({
        required_error: "Title is required",
      }),
      dueDate: z.string({
        required_error: "dueDate is required",
      }),
      products: z
        .array(
          z.object({
            productID: z.string(),
            title: z.string(),
            addedBy: z.string(),
          })
        )
        .optional(),
    })
    .strict(),
});
