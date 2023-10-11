import { z } from 'zod'
import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'

export const EnderecoSchema = z.object({
  /**
   * CEP (ZipCode)
   */
  cep: z.string(),
  /**
   * Estado (Unidade Federativa)
   */
  uf: UnidadeFederativaEnum,
  /**
   * Cidade
   */
  cidade: z.string(),
  /**
   * Bairro
   */
  bairro: z.string(),
  /**
   * Logradouro
   */
  logradouro: z.string(),
  /**
   * Complemento
   */
  complemento: z.string().optional(),
  /**
   * Numero do endereco
   */
  numeroEndereco: z.string(),
})
