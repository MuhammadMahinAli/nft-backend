import {z} from "zod";
const titleEnums = ["NFT", "OffPrint", "VR", "AR"];
//
export const createVersionZodSchema = z.object({
  body: z
    .object({
      title: z.enum([...titleEnums], {
        required_error: "title is required",
      }),

      description: z.string({
        required_error: "description is required",
      }),
    })
    .strict(),
});
