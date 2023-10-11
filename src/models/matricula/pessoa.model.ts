import { CarteiraTrabalhoSchema } from '../documentos/carteira-trabalho.model'
import { CarteiraIdentidadeSchema } from '../documentos/carteira-identidade.model'
import { CarteiraNacionalHabilitacaoSchema } from '../documentos/carteira-nacional-habilitacao.model'
import { NacionalidadeSchema } from './nacionalidade.model'
import { TituloEleitorSchema } from '../documentos/titulo-eleitor.model'
import { EscolaridadeSchema } from './escolaridade.model'
import { EnderecoSchema } from '@/models/common/endereco.model'
import { SexoEnum } from '@/enumaration/sexo.enum'
import { z } from 'zod'
import { EstadoCivilEnum } from '@/enumaration/estado-civil.enum'
import { CorRacaEnum } from '@/enumaration/cor-raca.enum'

export const PessoaSchema = z
  .object({
    /**
     * Codigo sequencial de Identificacao
     */
    id: z.string().readonly(),
    /**
     * Foto de Perfil
     */
    urlFoto: z.string().optional(),
    /**
     * Nome completo
     */
    nomeCompleto: z.string(),
    /**
     * Nome social
     */
    nomeSocial: z.string().optional(),
    /**
     * Nome da mae
     */
    nomeMae: z.string(),
    /**
     * Data de nascimento
     */
    dataNascimento: z.date(),
    /**
     * CPF (Documento Unico de Identificacao no Brasil)
     */
    cpf: z.string(),
    /**
     * Sexo
     */
    sexo: SexoEnum,
    /**
     * Estado civil
     */
    estadoCivil: EstadoCivilEnum.optional(),
    /**
     * Cor Raca
     */
    corRaca: CorRacaEnum.optional(),
    /**
     * CID PcD
     */
    cidPcD: z.string().optional(),
    /**
     * Tipo PcD
     */
    tipoPcD: z.string().optional(),
  })
  .merge(EnderecoSchema)
  .merge(CarteiraTrabalhoSchema)
  .merge(CarteiraIdentidadeSchema)
  .merge(CarteiraNacionalHabilitacaoSchema)
  .merge(TituloEleitorSchema)
  .merge(NacionalidadeSchema)
  .merge(EscolaridadeSchema)
