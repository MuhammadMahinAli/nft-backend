import {z} from "zod";

export const createCollectionZodSchema = z.object({
  body: z
    .object({
      description: z.string({
        required_error: "Description is required",
      }),
      title: z.string({
        required_error: "Title is required",
      }),
      image: z.string({
        required_error: "image is required",
      }),
      products: z
        .array(
          z.object({
            productID: z.string(),
          })
        )
        .optional(),
      addedBy: z.string({
        required_error: "AddedBy is required",
      }),

      quantity: z.number().optional(),
      totalMinted: z.number().optional(),
      mintedRecentMonth: z.number().optional(),
      mintedAt: z.number().optional(),
      currency: z.array(z.string()).optional(),
      drop: z.string().optional(),
      traits: z.array(z.string({required_error: "At least one trait is required"})),
      hasOffers: z.boolean().optional(),
    })
    .strict(),
});
//
export const updateCollectionZodSchema = z.object({
  body: z
    .object({
      description: z.string().optional(),
      name: z.string().optional(),
      products: z
        .array(
          z.object({
            productID: z.string(),
          })
        )
        .optional(),
      addedBy: z.string().optional(),

      quantity: z.number().optional(),
      totalMinted: z.number().optional(),
      mintedRecentMonth: z.number().optional(),
      mintedAt: z.number().optional(),
      currency: z.array(z.string()).optional(),
      drop: z.string().optional(),
      traits: z
        .array(
          z.object({
            id: z.string().optional(),
            title: z.string().optional(),
          })
        )
        .optional(),
      hasOffers: z.boolean().optional(),
    })
    .strict(),
});
