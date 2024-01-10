import { z } from 'zod'

export const CarteiraNacionalHabilitacaoSchema = z.object({
  /**
   * Numero CNH
   */
  numeroCNH: z.string().optional(),
  /**
   * Categoria CNH
   */
  categoriaCNH: z.string().optional(),
  /**
   * Data de Emissao da CNH
   */
  dataEmissaoCNH: z.date().optional(),
  /**
   * Data de Validade da CNH
   */
  dataValidadeCNH: z.date().optional(),
})
