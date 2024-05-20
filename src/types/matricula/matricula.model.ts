import { z } from 'zod'
import { CargoSchema } from '@/types/cargo/cargo.model'
import { OrganogramaSchema } from '@/types/organograma/organograma.model'
import { PessoaSchema } from '@/types/matricula/pessoa.model'

export const MatriculaSchema = z.object({
  id: z.string().readonly(),
  ativo: z.boolean().readonly(),
  numeroMatricula: z.string().readonly(),
  dataAdmissao: z.date(),
  dataPosse: z.date().nullish(),
  dataNomeacao: z.date().nullish(),
  pessoa: PessoaSchema,
  decreto: z
    .object({
      numero: z.string().nullish(),
      ano: z.number().nullish(),
      dataDecreto: z.date().nullish(),
    })
    .nullish(),
  cargos: z
    .array(
      z.object({
        id: z.string().readonly(),
        atual: z.boolean().default(false),
        dataInicio: z.date(),
        dataFim: z.date().nullish(),
        cargo: CargoSchema,
      }),
    )
    .nullish(),
  lotacoes: z.array(
    z
      .object({
        id: z.string().readonly(),
        atual: z.boolean().default(false),
        dataInicio: z.date(),
        dataFim: z.date().nullish(),
        organograma: OrganogramaSchema,
      })
      .nullish(),
  ),
})

export type MatriculaType = z.infer<typeof MatriculaSchema>
