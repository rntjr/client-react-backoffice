import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'
import { z } from 'zod'

export const CarteiraIdentidadeSchema = z.object({
  /**
   * Numero da identidade
   */
  numeroIdentidade: z.string().nullish(),
  /**
   * Data de emissao da identidade
   */
  dataExpedicaoIdentidade: z.date().nullish(),
  /**
   * Orgao expedidor da identidade
   */
  orgaoExpedidorIdentidade: z.string().nullish(),
  /**
   * UF Orgao expedidor da identidade
   */
  ufOrgaoExpedidorIdentidade: UnidadeFederativaEnum.nullish(),
})
