import {z} from "zod";

//validation for login data
export const loginZodSchema = z.object({
  body: z
    .object({
      password: z.string({
        required_error: "Password is required",
      }),
      email: z
        .string({
          required_error: "email is required",
        })
        .email(),
    })
    .strict(),
});
