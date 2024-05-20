import { z } from 'zod'

export const TipoContatoSchema = z.object({
  id: z.string().readonly(),
  descricao: z.string(),
})

export const ContatoSchema = z.object({
  id: z.string().readonly(),
  tipo: TipoContatoSchema,
  descricao: z.string(),
})

export type TipoContatoType = z.infer<typeof TipoContatoSchema>
export type ContatoType = z.infer<typeof ContatoSchema>
