import { z } from "zod"

export const amountFormSchema = z.object({
  amount: z
    .string()
    .min(1, "Amount is required")
    .refine(
      (val) => /^\d+(\.\d{1,2})?$/.test(val),
      "Must be a positive number with up to 2 decimals"
    )
})

export type AmountFormData = z.infer<typeof amountFormSchema>
