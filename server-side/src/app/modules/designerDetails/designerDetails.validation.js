import {z} from "zod";

export const addORUpdateDesignerDetailsZodSchema = z.object({
  body: z
    .object({
      designer: z.string({
        required_error: "designer is required",
      }),
      displayName: z.string().optional(),
      description: z.string().optional(),

      bannerImg: z.string().optional(),
      profession: z.string().optional(),
      skills: z.array(z.string().optional()).optional(),
      languages: z.array(z.string().optional()).optional(),
      hobbies: z.array(z.string().optional()).optional(),

      educations: z
        .array(
          z.object({
            id: z.string().optional(),
            country: z.string().optional(),
            institution: z.string().optional(),
            major: z.string().optional(),
            year: z.string().optional(),
            title: z.string().optional(),
          })
        )
        .optional(),
      certificates: z
        .array(
          z.object({
            id: z.string().optional(),
            certificateOReward: z.string().optional(),
            certifiedFrom: z.string().optional(),
            year: z.string().optional(),
          })
        )
        .optional(),
    })
    .strict(),
});
