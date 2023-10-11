import { z } from 'zod'

enum CorRaca {
  BRANCA = 'BRANCA',
  PRETA = 'PRETA',
  AMARELA = 'AMARELA',
  PARDA = 'PARDA',
  INDIGENA = 'INDIGENA',
  SEM_DECLARACAO = 'SEM_DECLARACAO',
}

export const CorRacaEnum = z.nativeEnum(CorRaca)
export type CorRacaEnumType = z.infer<typeof CorRacaEnum>

export const corRacas: { label: string; value: CorRacaEnumType }[] = [
  {
    label: 'Branca',
    value: CorRaca.BRANCA,
  },
  {
    label: 'Preta',
    value: CorRaca.PRETA,
  },
  {
    label: 'Amarela',
    value: CorRaca.AMARELA,
  },
  {
    label: 'Parda',
    value: CorRaca.PARDA,
  },
  {
    label: 'Indígina',
    value: CorRaca.INDIGENA,
  },
  {
    label: 'Sem Declaração',
    value: CorRaca.SEM_DECLARACAO,
  },
]
