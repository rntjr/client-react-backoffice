import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'
import { z } from 'zod'

export const CarteiraTrabalhoSchema = z.object({
  /**
   * Numero da CTPS
   */
  numeroCTPS: z.string().nullish(),
  /**
   * Serie da CTPS
   */
  serieCTPS: z.string().nullish(),
  /**
   * Numero PIS, PASEP, NIT ou NIS
   */
  numeroPisPasepNITNIS: z.string().nullish(),
  /**
   * Data de Expedicao da CTPS
   */
  dataExpedicaoCTPS: z.date().nullish(),
  /**
   * UF expedicao CTPS
   */
  ufCTPS: UnidadeFederativaEnum.nullish(),
})
