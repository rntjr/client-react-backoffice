import { Fieldset } from '@/components/fieldset'
import { InputText } from '@/components/input/input-text'
import { useFormContext } from 'react-hook-form'
import { PessoaType } from '@/types/matricula/pessoa.model'
import { InputDate } from '@/components/input/input-date'
import { InputSelect } from '@/components/input/input-select'

export const TabDocumentos = () => {
  const { control } = useFormContext<PessoaType>()
  return (
    <div className={'flex flex-col gap-4'}>
      <Fieldset.Root label={'Carteira de Identidade'}>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-4'}>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Número da Identidade'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputDate
              control={control}
              label={'Data da Emissão'}
              name={'dataExpedicaoIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Órgão Expedidor'}
              name={'orgaoExpedidorIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSelect
              control={control}
              label={'UF Órgão Expedidor'}
              name={'ufOrgaoExpedidorIdentidade'}
            />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Carteira de Habilitação'}>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-4'}>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Número da CNH'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Categoria'}
              name={'orgaoExpedidorIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputDate
              control={control}
              label={'Data da Emissão'}
              name={'dataExpedicaoIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputDate
              control={control}
              label={'Data de Validade'}
              name={'dataExpedicaoIdentidade'}
            />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Carteira de Trabalho e Previdência Social'}>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-4'}>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Número da CTPS'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Série'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'NIT/PIS'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'md:col-span-1'} />
          <div className={'col-span-1'}>
            <InputDate
              control={control}
              label={'Data da Emissão'}
              name={'dataExpedicaoIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSelect
              control={control}
              label={'UF Órgão Expedidor'}
              name={'ufOrgaoExpedidorIdentidade'}
            />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Título de Eleitor'}>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-4'}>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Número do Título'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Zona'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              control={control}
              label={'Seção'}
              name={'numeroIdentidade'}
            />
          </div>
          <div className={'md:col-span-1'} />
          <div className={'col-span-1'}>
            <InputDate
              control={control}
              label={'Data da Emissão'}
              name={'dataExpedicaoIdentidade'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSelect
              control={control}
              label={'UF Órgão Expedidor'}
              name={'ufOrgaoExpedidorIdentidade'}
            />
          </div>
        </div>
      </Fieldset.Root>
    </div>
  )
}
