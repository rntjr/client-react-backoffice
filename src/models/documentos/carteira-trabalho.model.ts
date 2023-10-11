import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'
import { z } from 'zod'

export const CarteiraTrabalhoSchema = z.object({
  /**
   * Numero da CTPS
   */
  numeroCTPS: z.string().optional(),
  /**
   * Serie da CTPS
   */
  serieCTPS: z.string().optional(),
  /**
   * Numero PIS, PASEP, NIT ou NIS
   */
  numeroPisPasepNITNIS: z.string().optional(),
  /**
   * Data de Expedicao da CTPS
   */
  dataExpedicaoCTPS: z.date().optional(),
  /**
   * UF expedicao CTPS
   */
  ufCTPS: UnidadeFederativaEnum.optional(),
})
