import { z } from 'zod'

enum TipoConcelhoOrdemProfissional {
  CRA = 'CRA',
  CAU = 'CAU',
  OAB = 'OAB',
  CRESS = 'CRESS',
  CRB = 'CRB',
  CRBIO = 'CRBIO',
  CRBM = 'CRBM',
  CRC = 'CRC',
  CORECON = 'CORECON',
  CREF = 'CREF',
  COREN = 'COREN',
  CREA = 'CREA',
  CRF = 'CRF',
  CREFITO = 'CREFITO',
  CRM = 'CRM',
  CRO = 'CRO',
  CRP = 'CRP',
  CRN = 'CRN',
  CRTR = 'CRTR',
  CRMV = 'CRMV',
  CREFONO = 'CREFONO',
}

export const TipoConcelhoOrdemProfissionalEnum = z.nativeEnum(
  TipoConcelhoOrdemProfissional,
)
export type TipoConcelhoOrdemProfissionalType = z.infer<
  typeof TipoConcelhoOrdemProfissionalEnum
>

export const tipoConselhoOrdemProfissionalDescricoes: {
  label: string
  value: TipoConcelhoOrdemProfissionalType
}[] = [
  {
    value: TipoConcelhoOrdemProfissional.CRA,
    label: 'CRA - Conselho Regional de Administração',
  },
  {
    value: TipoConcelhoOrdemProfissional.CAU,
    label: 'CAU - Conselho de Arquitetura e Urbanismo do Brasil',
  },
  {
    value: TipoConcelhoOrdemProfissional.OAB,
    label: 'OAB - Ordem dos Advogados do Brasil',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRESS,
    label: 'CRESS - Conselho Regional de Serviço Social',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRB,
    label: 'CRB - Conselho Regional de Biblioteconomia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRBIO,
    label: 'CRBIO - Conselho Regional de Biologia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRBM,
    label: 'CRBM - Conselho Regional de Biomedicina',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRC,
    label: 'CRC - Conselho Regional de Contabilidade',
  },
  {
    value: TipoConcelhoOrdemProfissional.CORECON,
    label: 'CORECON - Conselho Regional de Economia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CREF,
    label: 'CREF - Conselho Regional de Educação Física',
  },
  {
    value: TipoConcelhoOrdemProfissional.COREN,
    label: 'COREN - Conselho Regional de Enfermagem',
  },
  {
    value: TipoConcelhoOrdemProfissional.CREA,
    label: 'CREA - Conselho Regional de Engenharia e Agronomia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRF,
    label: 'CRF - Conselho Regional de Farmácia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CREFITO,
    label: 'CREFITO - Conselho Regional de Fisioterapia e Terapia Ocupacional',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRM,
    label: 'CRM - Conselho Regional de Medicina',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRO,
    label: 'CRO - Conselho Regional de Odontologia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRP,
    label: 'CRP - Conselho Regional de Psicologia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRN,
    label: 'CRN - Conselho Regional de Nutrição',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRTR,
    label: 'CRTR - Conselho Regional de Técnicos em Radiologia',
  },
  {
    value: TipoConcelhoOrdemProfissional.CRMV,
    label: 'CRMV - Conselho Regional de Medicina Veterinária',
  },
  {
    value: TipoConcelhoOrdemProfissional.CREFONO,
    label: 'CREFONO - Conselho Regional de Fonoaudiologia',
  },
]
