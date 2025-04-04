import { z } from "zod";

  export const todoFormSchema = z.object({
    title: z
      .string()
      .min(5, {
        message: "Title must be at least 5 characters.",
      })
      .max(100, {
        message: "Title must be at most 100 characters.",
      }),
    body: z
      .string()
      .max(100, {
        message: "Body must be at most 100 characters.",
      })
      .optional(),
    completed: z
      .boolean()
  });

  export type TodoFormSchema = z.infer<typeof todoFormSchema>;
