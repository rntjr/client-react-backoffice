import { z } from 'zod'

enum TipoPcD {
  FISICA = 'FISICA',
  AUDITIVA = 'AUDITIVA',
  VISUAL = 'VISUAL',
  INTELECTUAL = 'INTELECTUAL',
  MULTIPLA = 'MULTIPLA',
}

export const TipoPcDEnum = z.nativeEnum(TipoPcD)
export type TipoPcDType = z.infer<typeof TipoPcDEnum>

export const tiposPcD: { label: string; value: TipoPcDType }[] = [
  {
    label: 'Física',
    value: TipoPcD.FISICA,
  },
  {
    label: 'Auditiva',
    value: TipoPcD.AUDITIVA,
  },
  {
    label: 'Visual',
    value: TipoPcD.VISUAL,
  },
  {
    label: 'Intelectual (Mental)',
    value: TipoPcD.INTELECTUAL,
  },
  {
    label: 'Múltipla',
    value: TipoPcD.MULTIPLA,
  },
]
