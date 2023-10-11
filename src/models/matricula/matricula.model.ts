import { z } from 'zod'
import { CargoSchema } from '@/models/cargo/cargo.model'
import { OrganogramaSchema } from '@/models/organograma/organograma.model'
import { PessoaSchema } from '@/models/matricula/pessoa.model'

export const MatriculaSchema = z.object({
  id: z.string().readonly(),
  ativo: z.boolean().readonly(),
  numeroMatricula: z.string().readonly(),
  dataAdmissao: z.date(),
  dataPosse: z.date().optional(),
  dataNomeacao: z.date().optional(),
  pessoa: PessoaSchema,
  cargos: z.array(
    z.object({
      id: z.string(),
      atual: z.boolean().default(false),
      dataInicio: z.date(),
      dataFim: z.date().optional(),
      cargo: CargoSchema,
    }),
  ),
  lotacoes: z.array(
    z.object({
      id: z.string(),
      atual: z.boolean().default(false),
      dataInicio: z.date(),
      dataFim: z.date().optional(),
      organograma: OrganogramaSchema,
    }),
  ),
})

export type MatriculaType = z.infer<typeof MatriculaSchema>
