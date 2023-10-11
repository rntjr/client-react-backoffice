import { z } from 'zod'

enum GrauDependencia {
  NORMAL = 'NORMAL',
}

export const GrauDependenciaEnum = z.nativeEnum(GrauDependencia)
export type GrauDependenciaType = z.infer<typeof GrauDependenciaEnum>

export const grausDependencia: { label: string; value: GrauDependenciaType }[] =
  [
    {
      label: '',
      value: GrauDependencia.NORMAL,
    },
  ]
