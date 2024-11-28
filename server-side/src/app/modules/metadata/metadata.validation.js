import {z} from "zod";

export const createMetaDataZodSchema = z.object({
  body: z
    .object({
      name: z.string({
        required_error: "name is required",
      }),
      description: z.string({
        required_error: "description is required",
      }),

      artist: z.string({
        required_error: "artist is required",
      }),

      image: z.string({
        required_error: "image is required",
      }),
      external_url: z.string({
        required_error: "external_url is required",
      }),
      attributes: z.array(
        z.object({
          traitType: z.string({
            required_error: "traitType is required",
          }),
          value: z.string({
            required_error: "value is required",
          }),
        })
      ),
      artistEmail: z.string({
        required_error: "artistAddress is required",
      }),
      artistPhone: z.string({
        required_error: "artistPhone is required",
      }),
    })
    .strict(),
});
