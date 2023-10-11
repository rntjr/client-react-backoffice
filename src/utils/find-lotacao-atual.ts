import { MatriculaModel } from '@/models/matricula/matricula.model'

export function findLotacaoAtual({ lotacoes }: MatriculaModel) {
  if (typeof lotacoes !== undefined && lotacoes?.length > 0)
    return lotacoes
      .find((item) => item.atual)
      ?.organograma.descricao.toUpperCase()
  return 'Lotação não encontrado'.toUpperCase()
}
