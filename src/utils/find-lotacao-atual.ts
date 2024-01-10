import { MatriculaType } from '@/types/matricula/matricula.model'

export function findLotacaoAtual({ lotacoes }: MatriculaType) {
  if (typeof lotacoes !== undefined && lotacoes?.length > 0)
    return lotacoes
      .find(({ atual }) => atual)
      ?.organograma.descricao.toUpperCase()
  return 'Lotação não encontrado'.toUpperCase()
}
