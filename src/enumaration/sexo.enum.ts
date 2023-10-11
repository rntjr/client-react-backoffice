import { z } from 'zod'

enum Sexo {
  MASCULINO = 'M',
  FEMININO = 'F',
}

export const SexoEnum = z.nativeEnum(Sexo)
export type SexoType = z.infer<typeof SexoEnum>

export const sexos: { label: string; value: SexoType }[] = [
  {
    label: 'Masculino',
    value: Sexo.MASCULINO,
  },
  {
    label: 'Feminino',
    value: Sexo.FEMININO,
  },
]
