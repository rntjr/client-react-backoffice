import { OrganogramaModel } from '@/models/organograma/organograma.model'

export interface LotacoesMatriculaModel {
  id: string
  atual: boolean
  dataInicio: Date
  dataFim?: Date
  organograma: OrganogramaModel
}
