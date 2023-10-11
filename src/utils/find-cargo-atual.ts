import { MatriculaModel } from '@/models/matricula/matricula.model'

export function findCargoAtual({ cargos }: MatriculaModel) {
  if (typeof cargos !== undefined && cargos?.length > 0)
    return cargos.find((item) => item.atual)?.cargo.descricao.toUpperCase()

  return 'Cargo não encontrado!'.toUpperCase()
}
