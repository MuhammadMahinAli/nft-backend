import {z} from "zod";

export const createMintNFTZodSchema = z.object({
  body: z
    .object({
      item: z.string({
        required_error: "item is required",
      }),
      itemType: z.enum(["product", "collection"], {
        required_error: "itemType is required",
      }),

      artist: z.string({
        required_error: "artist is required",
      }),
      certified: z.boolean({
        required_error: "certified is required",
      }),
      image: z.string().optional(),
      artistName: z.string({
        required_error: "artistName is required",
      }),
      artistAddress: z.string({
        required_error: "artistAddress is required",
      }),
      artistPhone: z.string({
        required_error: "artistPhone is required",
      }),
      nidOFArtist: z.string({
        required_error: "nidOFArtist is required",
      }),
      status: z.enum(["pending", "approved", "rejected"]).optional(),
    })
    .strict(),
});
//
export const updateMintNFTZodSchema = z.object({
  body: z
    .object({
      item: z.string().optional(),
      itemType: z.enum(["product", "collection"]).optional(),

      artist: z.string().optional(),
      image: z.string().optional(),
      artistName: z.string().optional(),
      artistAddress: z.string().optional(),
      artistPhone: z.string().optional(),
      nidOFArtist: z.string().optional(),
      status: z.enum(["pending", "approved", "rejected"]).optional(),
    })
    .strict(),
});
