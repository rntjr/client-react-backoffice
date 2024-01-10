import { MatriculaType } from '@/types/matricula/matricula.model'
import { SexoEnum } from '@/enumaration/sexo.enum'
import { UnidadeFederativaEnum } from '@/enumaration/unidade-federativa.enum'

export const matriculasMock: MatriculaType[] = [
  {
    id: '52e44334-27d2-4cba-88aa-8c1ff5afbf20',
    ativo: true,
    numeroMatricula: '13456',
    dataAdmissao: new Date('2023-12-01'),
    dataPosse: new Date('2023-02-01'),
    dataNomeacao: new Date('2023-02-01'),
    decreto: {
      ano: 2023,
      numero: '103404',
      dataDecreto: new Date('2023-01-27'),
    },
    pessoa: {
      id: 'e6820e63-cc0a-4f5c-8130-bd1e88457d30',
      urlFoto: 'https://avatars.githubusercontent.com/u/48002341?v=4',
      nomeCompleto: 'Renato Franco Boachaques Junior',
      cpf: '457.212.678-01',
      numeroIdentidade: '37.917.528-9',
      dataNascimento: new Date('2000-04-10'),
      sexo: SexoEnum.enum.MASCULINO,
      nomeMae: 'Alice Andreia Rita',
      cep: '18405-100',
      logradouro: 'Rua Leovigildo de Almeida Camargo',
      numeroEndereco: '283',
      bairro: 'Jardim Ferrari',
      cidade: 'Itapeva',
      uf: UnidadeFederativaEnum.enum.SAO_PAULO,
    },
    cargos: [
      {
        id: '4d86464f-402d-4864-8527-398201d71cc6',
        atual: true,
        dataInicio: new Date('2023-02-01'),
        cargo: {
          id: 'ca1d2b01-06fb-4046-b4d5-02a8a77d1ad2',
          cbo: {
            codigo: '317110',
            descricao: 'Programador de sistemas de informação',
          },
          descricao: 'Analista de Sistemas',
          ativo: true,
          organograma: {
            id: 'eb967fa3-9634-4bed-951a-782f6d082dd2',
            ano: 2023,
            codigo: '2',
            descricao: 'Prefeitura',
            codigoFormatado: '2',
          },
        },
      },
    ],
    lotacoes: [
      {
        id: 'f92fd69b-2310-4d9c-b5b6-a1a897845369',
        atual: true,
        dataInicio: new Date('2023-02-01'),
        organograma: {
          id: 'eb967fa3-9634-4bed-951a-782f6d082dd2',
          ano: 2023,
          codigo: '2.1',
          descricao: 'Secretaria de Educação',
          codigoFormatado: '2',
        },
      },
    ],
  },
  {
    id: '134be9df-fa77-4d7a-b6b8-7d1025064fff',
    ativo: false,
    numeroMatricula: '27856',
    dataAdmissao: new Date('2023-02-02'),
    dataPosse: new Date('2023-02-01'),
    dataNomeacao: new Date('2023-02-01'),
    pessoa: {
      id: 'a9008545-dc8c-46e7-aed4-ee2a1fa5e862',
      urlFoto: 'https://avatars.githubusercontent.com/u/31322421?v=4',
      nomeCompleto: 'Marcelo Pereira da Silva',
      cpf: '816.510.878-65',
      numeroIdentidade: '32.717.581-3',
      dataNascimento: new Date('2005-05-14'),
      sexo: SexoEnum.enum.MASCULINO,
      nomeMae: 'Camila Natália',
      cep: '18401-470',
      logradouro: 'Rua das Margaridas',
      numeroEndereco: '692',
      bairro: 'Jardim Belvedere',
      cidade: 'Itapeva',
      uf: UnidadeFederativaEnum.enum.SAO_PAULO,
    },
    cargos: [
      {
        id: '3a7516a7-5f04-4674-9c7e-5baafcc0a0bc',
        atual: true,
        dataInicio: new Date('2023-02-01'),
        cargo: {
          id: 'ca1d2b01-06fb-4046-b4d5-02a8a77d1ad2',
          cbo: {
            codigo: '254410',
            descricao: 'Fiscais de tributos estaduais e municipais',
          },
          descricao: 'Fiscal Tributario',
          ativo: true,
          organograma: {
            id: 'eb967fa3-9634-4bed-951a-782f6d082dd2',
            ano: 2023,
            codigo: '2',
            descricao: 'Prefeitura',
            codigoFormatado: '2',
          },
        },
      },
    ],
    lotacoes: [
      {
        id: 'f92fd69b-2310-4d9c-b5b6-a1a897845369',
        atual: true,
        dataInicio: new Date('2023-02-01'),
        organograma: {
          id: 'eb967fa3-9634-4bed-951a-782f6d082dd2',
          ano: 2023,
          codigo: '2',
          descricao: 'Secretaria de Administração e Finanças',
          codigoFormatado: '2',
        },
      },
    ],
  },
]
