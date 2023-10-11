import { z } from 'zod'

enum Nacionalidade {
  BRASIL = 'BRASIL',
}

export const NacionalidadeEnum = z.nativeEnum(Nacionalidade)
export type NacionalidadeType = z.infer<typeof NacionalidadeEnum>

export const nacionalidades: { label: string; value: NacionalidadeType }[] = [
  {
    label: 'Brasil',
    value: Nacionalidade.BRASIL,
  },
]
