import { MatriculaType } from '@/types/matricula/matricula.model'

export function findCargoAtual({ cargos }: MatriculaType) {
  if (typeof cargos !== undefined && cargos?.length > 0)
    return cargos.find(({ atual }) => atual)?.cargo.descricao.toUpperCase()

  return 'Cargo não encontrado!'.toUpperCase()
}
