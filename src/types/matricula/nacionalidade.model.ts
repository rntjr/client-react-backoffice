import { NacionalidadeEnum } from '@/enumaration/nacionalidade.enum'
import { z } from 'zod'
export const NacionalidadeSchema = z.object({
  /**
   * Nacionalidade
   */
  nacionalidade: NacionalidadeEnum.optional(),
  /**
   * Naturalidade (Informa o Local de Nascimento)
   */
  naturalidade: z.string().optional(),
})
