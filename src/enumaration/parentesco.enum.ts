import { z } from 'zod'

enum Parentesco {
  FILHO = 'FILHO',
}

export const ParentescoEnum = z.nativeEnum(Parentesco)
export type ParentescoType = z.infer<typeof ParentescoEnum>

export const parentescos: { label: string; value: ParentescoType }[] = [
  {
    label: 'Filho',
    value: Parentesco.FILHO,
  },
]
