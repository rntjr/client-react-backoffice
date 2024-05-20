import { NacionalidadeEnum } from '@/enumaration/nacionalidade.enum'
import { z } from 'zod'
export const NacionalidadeSchema = z.object({
  /**
   * Nacionalidade
   */
  nacionalidade: NacionalidadeEnum.nullish(),
  /**
   * Naturalidade (Informa o Local de Nascimento)
   */
  naturalidade: z.string().nullish(),
})
