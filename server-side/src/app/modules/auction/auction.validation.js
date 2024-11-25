import {z} from "zod";

export const createAuctionZodSchema = z.object({
  body: z
    .object({
      product: z.string({
        required_error: "product is required",
      }),
      collectionID: z.string({
        required_error: "collection is required",
      }),
      bidders: z
        .array(
          z.object({
            user: z.string(),
            bid: z.number(),
          })
        )
        .optional(),
      endedAt: z.string({
        required_error: "endedAt is required",
      }),
      madeBy: z.string({
        required_error: "madeBy is required",
      }),
    })
    .strict(),
});
