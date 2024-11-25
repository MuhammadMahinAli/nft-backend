import {z} from "zod";
export const createCartZodSchema = z.object({
  body: z
    .object({
      products: z.array(
        z.object({
          productID: z.string({required_error: "productID is required"}),
          price: z.number({required_error: "price is required"}),
          quantity: z.number({required_error: "quantity is required"}),
        })
      ),
      user: z.string({
        required_error: "user is required",
      }),
    })
    .strict(),
});
//
export const addToCartZodSchema = z.object({
  body: z
    .object({
      product: z.object({
        productID: z.string({required_error: "productID is required"}),
        price: z.number({required_error: "price is required"}),
        quantity: z.number({required_error: "quantity is required"}),
      }),
      user: z.string({
        required_error: "user is required",
      }),
      add: z.boolean({
        required_error: "add is required",
      }),
    })
    .strict(),
});
//
export const deleteFromCartZodSchema = z.object({
  body: z
    .object({
      product: z.string({required_error: "productID is required"}),
      user: z.string({
        required_error: "user is required",
      }),
      add: z.boolean({
        required_error: "add is required",
      }),
    })
    .strict(),
});
//
export const handleQuantityZodSchema = z.object({
  body: z
    .object({
      productID: z.string({required_error: "productID is required"}),
      user: z.string({
        required_error: "user is required",
      }),
      operation: z.enum(["plus", "minus"], {
        required_error: "operation is required",
      }),
    })
    .strict(),
});
