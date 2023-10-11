import { z } from 'zod'

enum EstadoCivil {
  SOLTEIRO = 'SOLTEIRO',
  CASADO = 'CASADO',
  DIVORCIADO = 'DIVORCIADO',
  SEPARADO = 'SEPARADO',
  VIUVO = 'VIUVO',
}

export const EstadoCivilEnum = z.nativeEnum(EstadoCivil)
export type EstadoCivilType = z.infer<typeof EstadoCivilEnum>

export const estadoCivil: { label: string; value: EstadoCivilType }[] = [
  {
    label: 'Solteiro',
    value: EstadoCivil.SOLTEIRO,
  },
  {
    label: 'Casado',
    value: EstadoCivil.CASADO,
  },
  {
    label: 'Divorciado',
    value: EstadoCivil.DIVORCIADO,
  },
  {
    label: 'Separado',
    value: EstadoCivil.SEPARADO,
  },
  {
    label: 'Viúvo',
    value: EstadoCivil.VIUVO,
  },
]
