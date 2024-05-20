import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'
import { z } from 'zod'

export const TituloEleitorSchema = z.object({
  /**
   * Numero Titulo de Eleitor
   */
  numeroTituloEleitor: z.string().nullish(),
  /**
   * Zona Titulo de Eleitor
   */
  zonaTituloEleitor: z.string().nullish(),
  /**
   * Secao Titulo de Eleitor
   */
  secaoTituloEleitor: z.string().nullish(),
  /**
   * Data de Expedicao do Titulo de Eleitor
   */
  dataExpedicaoTituloEleitor: z.date().nullish(),
  /**
   * UF Titulo de Eleitor
   */
  ufTituloEleitor: UnidadeFederativaEnum.nullish(),
})
