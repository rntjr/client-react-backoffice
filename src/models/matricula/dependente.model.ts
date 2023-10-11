import { PessoaSchema } from '@/models/matricula/pessoa.model'
import { z } from 'zod'
import { GrauDependenciaEnum } from '@/enumaration/grau-dependencia.enum'
import { EstadoCivilEnum } from '@/enumaration/estado-civil.enum'
import { EscolaridadeEnum } from '@/enumaration/escolaridade.enum'
import { ParentescoEnum } from '@/enumaration/parentesco.enum'
import { SexoEnum } from '@/enumaration/sexo.enum'

export const DependenteSchema = z.object({
  /**
   * Codigo sequencial de Identificacao
   */
  id: z.string(),
  /**
   * Titular do dependente
   */
  pessoa: PessoaSchema,
  /**
   * Nome completo do dependente
   */
  nomeCompleto: z.string(),
  /**
   * Sexo
   */
  sexo: SexoEnum.optional(),
  /**
   * CPF (Documento Unico de Identificacao no Brasil)
   */
  cpf: z.string(),
  /**
   * Data de nascimento
   */
  dataNascimento: z.date(),
  /**
   * Grau de Parentesco do dependente
   */
  parentesco: ParentescoEnum.optional(),
  /**
   * Grau de Escolaridade do dependente
   */
  escolaridade: EscolaridadeEnum.optional(),
  /**
   * Estado Civil
   */
  estadoCivil: EstadoCivilEnum.optional(),
  /**
   * Grau de Dependencia do Dependente
   */
  dependencia: GrauDependenciaEnum.optional(),
  /**
   * Naturalidade (Informa o Local de Nascimento)
   */
  naturalidade: z.string().optional(),
  /**
   * Dependente universitario
   */
  isUniversitario: z.boolean(),
  /**
   * Data Limite para Salario Familia
   */
  dataLimiteSalarioFamilia: z.date().optional(),
  /**
   * Data Limite para IRPF
   */
  dataLimiteIRPF: z.date().optional(),
  /**
   * Dependente Financeiro
   */
  isDependenteFinanceiro: z.boolean(),
  /**
   * Dependente PcD
   */
  isDependentePcD: z.boolean(),
})
