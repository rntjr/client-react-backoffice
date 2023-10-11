import { z } from 'zod'

export const OrganogramaSchema = z.object({
  id: z.string(),
  ano: z.number(),
  descricao: z.string(),
  codigo: z.string(),
  codigoFormatado: z.string(),
})
