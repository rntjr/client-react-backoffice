import { useFormContext } from 'react-hook-form'
import { PessoaType } from '@/types/matricula/pessoa.model'
import { InputSelect } from '@/components/input/input-select'
import { InputNaturalidade } from '@/components/input/input-naturalidade'
import { InputNacionalidade } from '@/components/input/input-nacionalidade'
import { Fieldset } from '@/components/fieldset'
import { InputText } from '@/components/input/input-text'
import { InputSimNao } from '@/components/input/input-sim-nao'

export const TabDadosPessoais = () => {
  const { control } = useFormContext<PessoaType>()

  return (
    <div className={'flex flex-col gap-4'}>
      <div className={'grid grid-cols-1 gap-4 md:grid-cols-4'}>
        <div className={'col-span-1 md:col-span-2'}>
          <InputText
            label={'Nome da Mãe'}
            name={'estadoCivil'}
            control={control}
          />
        </div>
        <div className={'col-span-1 md:col-span-2'}>
          <InputText
            label={'Nome do Pai'}
            name={'estadoCivil'}
            control={control}
          />
        </div>
        <div className={'col-span-1'}>
          <InputSelect
            label={'Estado Civíl'}
            name={'estadoCivil'}
            control={control}
          />
        </div>
        <div className={'col-span-1'}>
          <InputNaturalidade />
        </div>
        <div className={'col-span-1'}>
          <InputNacionalidade />
        </div>
        <div className={'col-span-1'}>
          <InputSelect label={'Cor/Raça'} name={'corRaca'} control={control} />
        </div>
        <div className={'col-span-1'}>
          <InputSimNao label={'PcD?'} name={'corRaca'} control={control} />
        </div>
        <div className={'col-span-1'}>
          <InputText label={'CID PcD'} name={'estadoCivil'} control={control} />
        </div>
        <div className={'col-span-2'}>
          <InputText
            label={'Descrição da Deficiência'}
            name={'estadoCivil'}
            control={control}
          />
        </div>
      </div>
      <Fieldset.Root label={'Formação'}>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-3'}>
          <div className={'col-span-1'}>
            <InputSelect
              label={'Grau de Instrução'}
              name={'estadoCivil'}
              control={control}
            />
          </div>
          <div className={'col-span-2'}>
            <InputText label={'Curso'} name={'estadoCivil'} control={control} />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Endereço'}>
        <div className={'grid grid-cols-1 gap-4 md:grid-cols-6'}>
          <div className={'col-span-1'}>
            <InputText label={'CEP'} name={'cep'} control={control} />
          </div>
          <div className={'col-span-1 md:col-span-2'}>
            <InputText
              label={'Logradouro'}
              name={'logradouro'}
              control={control}
              readOnly
            />
          </div>
          <div className={'col-span-1 md:col-span-2'}>
            <InputText
              label={'Complemento'}
              name={'complemento'}
              control={control}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText
              label={'Número'}
              name={'numeroEndereco'}
              control={control}
            />
          </div>
          <div className={'col-span-1 md:col-span-2'}>
            <InputText
              label={'Bairro'}
              name={'bairro'}
              control={control}
              readOnly
            />
          </div>
          <div className={'col-span-1 md:col-span-2'}>
            <InputText
              label={'Cidade'}
              name={'cidade'}
              control={control}
              readOnly
            />
          </div>
          <div className={'col-span-1 md:col-span-2'}>
            <InputText label={'UF'} name={'uf'} control={control} readOnly />
          </div>
        </div>
      </Fieldset.Root>
    </div>
  )
}
