import {z} from "zod";

export const createMintNFTZodSchema = z.object({
  body: z
    .object({
      title: z.string({
        required_error: "title is required",
      }),
      description: z.string({
        required_error: "description is required",
      }),
      price: z.number({
        required_error: "price is required",
      }),
      supply: z.number({
        required_error: "Supply is required",
      }),

      artist: z.string({
        required_error: "artist is required",
      }),

      image: z.string({
        required_error: "image is required",
      }),
    })
    .strict(),
});
//
export const updateMintNFTZodSchema = z.object({
  body: z
    .object({
      CID: z.string().optional(),
      description: z.string().optional(),
    })
    .strict(),
});
