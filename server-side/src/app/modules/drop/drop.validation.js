import {z} from "zod";

export const createDropZodSchema = z.object({
  body: z
    .object({
      collectionID: z.string({
        required_error: "collectionID is required",
      }),

      allowList: z.array(
        z.string({
          required_error: "allowed user for mint drop is required",
        })
      ),
    })
    .strict(),
});
