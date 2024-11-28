import {z} from "zod";
//user roles
const roleEnums = ["Admin", "Seller", "Buyer"];
//
export const createUserZodSchema = z.object({
  body: z
    .object({
      password: z.string({
        required_error: "Password is required",
      }),
      name: z.object({
        firstName: z.string({
          required_error: "First name is required",
        }),

        lastName: z.string({
          required_error: "Last name is required",
        }),
      }),
      email: z
        .string({
          required_error: "email is required",
        })
        .email(),
      phoneNumber: z.string({
        required_error: "Phone Number is required",
      }),
      address: z.string({
        required_error: "Address is required",
      }),
      role: z.enum([...roleEnums], {
        required_error: "Role is required",
      }),
      productsOwnerShip: z.string().optional(),
    })
    .strict(),
});
//
export const updateUserZodSchema = z.object({
  body: z
    .object({
      password: z.string().optional(),
      name: z
        .object({
          firstName: z.string().optional(),

          lastName: z.string().optional(),
        })
        .optional(),
      email: z.string().email().optional(),
      phoneNumber: z.string().optional(),
      address: z.string().optional(),
      role: z.enum([...roleEnums]).optional(),
      productsOwnerShip: z.string().optional(),
    })
    .strict(),
});
