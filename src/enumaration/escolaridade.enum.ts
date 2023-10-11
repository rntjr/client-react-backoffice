import { z } from 'zod'

enum Escolaridade {
  ANALFABETO = 'ANALFABETO',
  PRIMEIRO_FUNDAMENTAL_INCOMPLETO = 'PRIMEIRO_FUNDAMENTAL_INCOMPLETO',
  PRIMEIRO_FUNDAMENTAL_COMPLETO = 'PRIMEIRO_FUNDAMENTAL_COMPLETO',
  SEGUNDO_FUNDAMENTAL_INCOMPLETO = 'SEGUNDO_FUNDAMENTAL_INCOMPLETO',
  SEGUNDO_FUNDAMENTAL_COMPLETO = 'SEGUNDO_FUNDAMENTAL_COMPLETO',
  MEDIO_INCOMPLETO = 'MEDIO_INCOMPLETO',
  MEDIO_COMPLETO = 'MEDIO_COMPLETO',
  SUPERIOR_INCOMPLETO = 'SUPERIOR_INCOMPLETO',
  SUPERIOR_COMPLETO = 'SUPERIOR_COMPLETO',
  POS_GRADUACAO_COMPLETO = 'POS_GRADUACAO_COMPLETO',
  MESTRADO_COMPLETO = 'MESTRADO_COMPLETO',
  DOUTORADO_COMPLETO = 'DOUTORADO_COMPLETO',
}

export const EscolaridadeEnum = z.nativeEnum(Escolaridade)
export type EscolaridadeType = z.infer<typeof EscolaridadeEnum>

export const escolaridades: { label: string; value: EscolaridadeType }[] = [
  {
    label:
      'Analfabeto, inclusive o que, embora tenha recebido instrução, não se alfabetizou.',
    value: Escolaridade.ANALFABETO,
  },
  {
    label:
      'Até o 5º ano incompleto do ensino fundamental (antiga 4ª série) ou que se tenha alfabetizado sem ter frequentado escola regular.',
    value: Escolaridade.PRIMEIRO_FUNDAMENTAL_INCOMPLETO,
  },
  {
    label: '5º ano completo do ensino fundamental.',
    value: Escolaridade.PRIMEIRO_FUNDAMENTAL_COMPLETO,
  },
  {
    label:
      'Do 6º ao 9º ano do ensino fundamental incompleto (antiga 5ª a 8ª série).',
    value: Escolaridade.SEGUNDO_FUNDAMENTAL_INCOMPLETO,
  },
  {
    label: 'Ensino fundamental completo.',
    value: Escolaridade.SEGUNDO_FUNDAMENTAL_COMPLETO,
  },
  {
    label: 'Ensino médio incompleto.',
    value: Escolaridade.MEDIO_INCOMPLETO,
  },
  {
    label: 'Ensino médio completo.',
    value: Escolaridade.MEDIO_COMPLETO,
  },
  {
    label: 'Educação superior incompleta.',
    value: Escolaridade.SUPERIOR_INCOMPLETO,
  },
  {
    label: 'Educação superior completa.',
    value: Escolaridade.SUPERIOR_COMPLETO,
  },
  {
    label: 'Pós-graduação completa.',
    value: Escolaridade.POS_GRADUACAO_COMPLETO,
  },
  {
    label: 'Mestrado completo.',
    value: Escolaridade.MESTRADO_COMPLETO,
  },
  {
    label: 'Doutorado completo.',
    value: Escolaridade.DOUTORADO_COMPLETO,
  },
]
