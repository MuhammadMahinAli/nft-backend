import { z } from "zod";

export const storeMintedNftZodSchema = z.object({
  body: z
    .object({
      user: z.string({
        required_error: "User is required",
      }),
      title: z.string({
        required_error: "Title is required",
      }),
      description: z.string({
        required_error: "Description is required",
      }),
      copy: z.number({
        required_error: "Price is required",
      }),
      price: z.number({
        required_error: "Price is required",
      }),
      image: z.string({
        required_error: "Image is required",
      }),
    })
    .strict(),
});
