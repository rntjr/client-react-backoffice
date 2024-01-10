import { z } from 'zod'

export const CboSchema = z.object({
  codigo: z.string(),
  descricao: z.string(),
})
