import {z} from "zod";
const statusEnums = ["In stock", "Out of stock"];
const addEnums = ["pending", "approved", "rejected"];
export const createProductZodSchema = z.object({
  body: z
    .object({
      payload: z.object({
        title: z.string({
          required_error: "title is required",
        }),
        description: z.string({
          required_error: "description is required",
        }),
        sku: z.string({
          required_error: "SKU is required",
        }),
        quantity: z.number().optional(),
        reprintPrice: z.number().optional(),
        recyclePrice: z.number().optional(),
        collections: z
          .array(
            z.object({
              name: z.string().optional(),
              collectionID: z.string().optional(),
            })
          )
          .optional(),
        colors: z
          .array(
            z.object({
              name: z.string(),
              quantity: z.number(),
            })
          )
          .optional(),
        sizes: z
          .array(
            z.object({
              size: z.string(),
              quantity: z.number(),
            })
          )
          .optional(),
        owners: z.array(z.string()).optional(),
        images: z.array(z.string()).optional(),
        image: z.string().optional(),

        // volume: z.string().optional(),
        // dimension: z.string().optional(),
        market_X: z.boolean({
          required_error: "market_X is required",
        }),
        availability: z.boolean({
          required_error: "availability is required",
        }),
        certificateReq: z.enum(["pending", "approved", "rejected", "Not requested"], {
          required_error: "certificateReq is required",
        }),

        addedBy: z.string({required_error: "Added by is required"}),
      }),
      nft: z.string().optional(),
      artist: z
        .object({
          name: z.string().optional(),
          email: z.string().optional(),
          address: z.string().optional(),
          createDateOfArt: z.string().optional(),
          phoneNumber: z.string().optional(),
          document: z.string().optional(),
        })
        .optional(),
      versions: z.array(
        z.object({
          name: z.string({
            required_error: "Name is required",
          }),
          versionID: z.string({
            required_error: "version id is required",
          }),
          price: z.number({
            required_error: "price is required",
          }),
          chain: z.string().optional(),
          supplyChain: z.string().optional(),
          weight: z.string().optional(),
          status: z.enum([...statusEnums]).optional(),
          dimension: z.string().optional(),
          image: z.string().optional(),
        })
      ),
    })
    .strict(),
});
///-----update product validation
export const updateProductZodSchema = z.object({
  body: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      sku: z.string().optional(),
      quantity: z.number().optional(),
      collections: z.array(
        z.object({
          name: z.string().optional(),

          collectionID: z.string().optional(),
        })
      ),
      colors: z
        .array(
          z.object({
            name: z.string(),
            quantity: z.number(),
          })
        )
        .optional(),
      sizes: z
        .array(
          z.object({
            size: z.string(),
            quantity: z.number(),
          })
        )
        .optional(),
      owners: z.array(z.string()).optional(),
      image: z.string().optional(),

      volume: z.string().optional(),
      market_X: z.boolean().optional(),
      availability: z.boolean().optional(),
      sold: z.boolean().optional(),
      hasOffers: z.boolean().optional(),
      requestRecycle: z.boolean().optional(),
      onAuction: z.boolean().optional(),
      soldAt: z.string().optional(),
      addedBy: z.string().optional(),
      addStatus: z.enum([...addEnums]).optional(),
    })
    .strict(),
});
