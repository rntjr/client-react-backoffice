import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'
import { z } from 'zod'

export const TituloEleitorSchema = z.object({
  /**
   * Numero Titulo de Eleitor
   */
  numeroTituloEleitor: z.string().optional(),
  /**
   * Zona Titulo de Eleitor
   */
  zonaTituloEleitor: z.string().optional(),
  /**
   * Secao Titulo de Eleitor
   */
  secaoTituloEleitor: z.string().optional(),
  /**
   * Data de Expedicao do Titulo de Eleitor
   */
  dataExpedicaoTituloEleitor: z.date().optional(),
  /**
   * UF Titulo de Eleitor
   */
  ufTituloEleitor: UnidadeFederativaEnum.optional(),
})
