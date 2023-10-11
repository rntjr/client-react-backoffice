import { OrganogramaSchema } from '@/models/organograma/organograma.model'
import { z } from 'zod'
import { CboSchema } from '@/models/cargo/cbo.model'

export const CargoSchema = z.object({
  id: z.string(),
  ativo: z.boolean().default(false),
  cbo: CboSchema,
  organograma: OrganogramaSchema,
  descricao: z.string(),
})
