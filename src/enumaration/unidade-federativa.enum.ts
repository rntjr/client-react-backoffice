import { z } from 'zod'

enum UnidadeFederativa {
  AMAZONAS = 'AMAZONAS',
  ALAGOAS = 'ALAGOAS',
  ACRE = 'ACRE',
  AMAPA = 'AMAPA',
  BAHIA = 'BAHIA',
  PARA = 'PARA',
  MATO_GROSSO = 'MATO_GROSSO',
  MINAS_GERAIS = 'MINAS_GERAIS',
  MATO_GROSSO_DO_SUL = 'MATO_GROSSO_DO_SUL',
  GOIAS = 'GOIAS',
  MARANHAO = 'MARANHAO',
  RIO_GRANDE_DO_SUL = 'RIO_GRANDE_DO_SUL',
  TOCANTINS = 'TOCANTINS',
  PIAUI = 'PIAUI',
  SAO_PAULO = 'SAO_PAULO',
  RONDONIA = 'RONDONIA',
  RORAIMA = 'RORAIMA',
  PARANA = 'PARANA',
  CEARA = 'CEARA',
  PERNAMBUCO = 'PERNAMBUCO',
  SANTA_CATARINA = 'SANTA_CATARINA',
  PARAIBA = 'PARAIBA',
  RIO_GRANDE_DO_NORTE = 'RIO_GRANDE_DO_NORTE',
  ESPIRITO_SANTO = 'ESPIRITO_SANTO',
  RIO_DE_JANEIRO = 'RIO_DE_JANEIRO',
  SERGIPE = 'SERGIPE',
  DISTRITO_FEDERAL = 'DISTRITO_FEDERAL',
}

export const UnidadeFederativaEnum = z.nativeEnum(UnidadeFederativa)
export type UnidadeFederativaType = z.infer<typeof UnidadeFederativaEnum>

export const unidadesFederativas: {
  label: string
  value: UnidadeFederativaType
}[] = [
  {
    value: UnidadeFederativa.AMAZONAS,
    label: 'AM',
  },
  {
    value: UnidadeFederativa.ALAGOAS,
    label: 'AL',
  },
  {
    value: UnidadeFederativa.ACRE,
    label: 'AC',
  },
  {
    value: UnidadeFederativa.AMAPA,
    label: 'AP',
  },
  {
    value: UnidadeFederativa.BAHIA,
    label: 'BA',
  },
  {
    value: UnidadeFederativa.PARA,
    label: 'PA',
  },
  {
    value: UnidadeFederativa.MATO_GROSSO,
    label: 'MT',
  },
  {
    value: UnidadeFederativa.MINAS_GERAIS,
    label: 'MG',
  },
  {
    value: UnidadeFederativa.MATO_GROSSO_DO_SUL,
    label: 'MS',
  },
  {
    value: UnidadeFederativa.GOIAS,
    label: 'GO',
  },
  {
    value: UnidadeFederativa.MARANHAO,
    label: 'MA',
  },
  {
    value: UnidadeFederativa.RIO_GRANDE_DO_SUL,
    label: 'RS',
  },
  {
    value: UnidadeFederativa.TOCANTINS,
    label: 'TO',
  },
  {
    value: UnidadeFederativa.PIAUI,
    label: 'PI',
  },
  {
    value: UnidadeFederativa.SAO_PAULO,
    label: 'SP',
  },
  {
    value: UnidadeFederativa.RONDONIA,
    label: 'RO',
  },
  {
    value: UnidadeFederativa.RORAIMA,
    label: 'RR',
  },
  {
    value: UnidadeFederativa.PARANA,
    label: 'PR',
  },
  {
    value: UnidadeFederativa.CEARA,
    label: 'CE',
  },
  {
    value: UnidadeFederativa.PERNAMBUCO,
    label: 'PE',
  },
  {
    value: UnidadeFederativa.SANTA_CATARINA,
    label: 'SC',
  },
  {
    value: UnidadeFederativa.PARAIBA,
    label: 'PB',
  },
  {
    value: UnidadeFederativa.RIO_GRANDE_DO_NORTE,
    label: 'RN',
  },
  {
    value: UnidadeFederativa.ESPIRITO_SANTO,
    label: 'ES',
  },
  {
    value: UnidadeFederativa.RIO_DE_JANEIRO,
    label: 'RJ',
  },
  {
    value: UnidadeFederativa.SERGIPE,
    label: 'SE',
  },
  {
    value: UnidadeFederativa.DISTRITO_FEDERAL,
    label: 'DF',
  },
]
