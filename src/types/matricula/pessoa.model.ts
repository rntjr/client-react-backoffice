import { CarteiraTrabalhoSchema } from '../documentos/carteira-trabalho.model'
import { CarteiraIdentidadeSchema } from '../documentos/carteira-identidade.model'
import { CarteiraNacionalHabilitacaoSchema } from '../documentos/carteira-nacional-habilitacao.model'
import { NacionalidadeSchema } from './nacionalidade.model'
import { TituloEleitorSchema } from '../documentos/titulo-eleitor.model'
import { EscolaridadeSchema } from './escolaridade.model'
import { EnderecoSchema } from '@/types/common/endereco.model'
import { SexoEnum } from '@/enumaration/sexo.enum'
import { z } from 'zod'
import { EstadoCivilEnum } from '@/enumaration/estado-civil.enum'
import { CorRacaEnum } from '@/enumaration/cor-raca.enum'
import { ContatoSchema } from '@/types/common/contato.model'
import { DependenteSchema } from '@/types/matricula/dependente.model'

export const PessoaSchema = z
  .object({
    /**
     * Codigo sequencial de Identificacao
     */
    id: z.string().readonly(),
    /**
     * Foto de Perfil
     */
    urlFoto: z.string().nullish(),
    /**
     * Nome completo
     */
    nomeCompleto: z.string(),
    /**
     * Nome social
     */
    nomeSocial: z.string().nullish(),
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
    estadoCivil: EstadoCivilEnum.nullish(),
    /**
     * Cor Raca
     */
    corRaca: CorRacaEnum.nullish(),
    /**
     * CID PcD
     */
    cidPcD: z.string().nullish(),
    /**
     * Tipo PcD
     */
    tipoPcD: z.string().nullish(),
    /**
     * Contato
     */
    contato: z.array(ContatoSchema).nullish(),
  })
  .merge(EnderecoSchema)
  .merge(CarteiraTrabalhoSchema)
  .merge(CarteiraIdentidadeSchema)
  .merge(CarteiraNacionalHabilitacaoSchema)
  .merge(TituloEleitorSchema)
  .merge(NacionalidadeSchema)
  .merge(EscolaridadeSchema)

export type PessoaType = z.infer<typeof PessoaSchema>
