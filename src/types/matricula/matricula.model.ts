import { z } from 'zod'
import { CargoSchema } from '@/types/cargo/cargo.model'
import { OrganogramaSchema } from '@/types/organograma/organograma.model'
import { PessoaSchema } from '@/types/matricula/pessoa.model'

export const MatriculaSchema = z.object({
  id: z.string().readonly(),
  ativo: z.boolean().readonly(),
  numeroMatricula: z.string().readonly(),
  dataAdmissao: z.date(),
  dataPosse: z.date().optional(),
  dataNomeacao: z.date().optional(),
  pessoa: PessoaSchema,
  decreto: z
    .object({
      numero: z.string().optional(),
      ano: z.number().optional(),
      dataDecreto: z.date().optional(),
    })
    .optional(),
  cargos: z
    .array(
      z.object({
        id: z.string(),
        atual: z.boolean().default(false),
        dataInicio: z.date(),
        dataFim: z.date().optional(),
        cargo: CargoSchema,
      }),
    )
    .nullish(),
  lotacoes: z.array(
    z
      .object({
        id: z.string(),
        atual: z.boolean().default(false),
        dataInicio: z.date(),
        dataFim: z.date().optional(),
        organograma: OrganogramaSchema,
      })
      .nullish(),
  ),
})

export type MatriculaType = z.infer<typeof MatriculaSchema>
