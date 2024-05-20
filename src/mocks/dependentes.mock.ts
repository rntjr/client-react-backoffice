import { DependenteType } from '@/types/matricula/dependente.model'
import { GrauDependenciaEnum } from '@/enumaration/grau-dependencia.enum'

export const dependentesMock: DependenteType[] = [
  {
    id: '9c04e5ea-e12d-4e24-8a66-5c523580f6b4',
    nomeCompleto: 'Henrique Franco Xavier',
    dependencia: GrauDependenciaEnum.enum.NORMAL,
    dataNascimento: new Date('2022-05-19'),
  },
]
