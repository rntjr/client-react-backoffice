import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'
import { z } from 'zod'

export const CarteiraIdentidadeSchema = z.object({
  /**
   * Numero da identidade
   */
  numeroIdentidade: z.string().optional(),
  /**
   * Data de emissao da identidade
   */
  dataExpedicaoIdentidade: z.date().optional(),
  /**
   * Orgao expedidor da identidade
   */
  orgaoExpedidorIdentidade: z.string().optional(),
  /**
   * UF Orgao expedidor da identidade
   */
  ufOrgaoExpedidorIdentidade: UnidadeFederativaEnum.optional(),
})
