import { z } from 'zod'

export const CarteiraNacionalHabilitacaoSchema = z.object({
  /**
   * Numero CNH
   */
  numeroCNH: z.string().nullish(),
  /**
   * Categoria CNH
   */
  categoriaCNH: z.string().nullish(),
  /**
   * Data de Emissao da CNH
   */
  dataEmissaoCNH: z.date().nullish(),
  /**
   * Data de Validade da CNH
   */
  dataValidadeCNH: z.date().nullish(),
})
