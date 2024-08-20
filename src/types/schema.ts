import { z } from "zod"

const form = z.object({
  name: z.string(),
  second: z.string(),
})

export type Form = z.infer<typeof form>
