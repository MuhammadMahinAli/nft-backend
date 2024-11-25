import {z} from "zod";

export const createNotificationZodSchema = z.object({
  body: z
    .object({
      title: z.string({
        required_error: "title is required",
      }),
      for: z.enum(["all", "one"], {required_error: "for is required"}),
      message: z.string({
        required_error: "message is required",
      }),
      user: z.string().optional(),
      extra: z.object().optional(),
    })
    .strict(),
});
