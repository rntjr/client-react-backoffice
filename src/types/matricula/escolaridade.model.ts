import { EscolaridadeEnum } from '@/enumaration/escolaridade.enum'
import { TipoConcelhoOrdemProfissionalEnum } from '@/enumaration/tipo-concelho-ordem-profissional.enum'
import { z } from 'zod'

export const EscolaridadeSchema = z.object({
  /**
   * Nivel de Escolaridade
   */
  escolaridade: EscolaridadeEnum.nullish(),
  /**
   * Concelho ou Ordem Profissional
   */
  concelhoOrdemProfissional: TipoConcelhoOrdemProfissionalEnum.nullish(),
  /**
   * Numero do Registro do Concelho ou Ordem Profissional
   */
  numeroRegistroConcelhoOrdemProfissional: z.string().nullish(),
})
