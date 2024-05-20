import { Fieldset } from '@/components/Fieldset'
import { InputPrevidencia } from '@/components/input/input-previdencia'
import { useFormContext } from 'react-hook-form'
import { MatriculaType } from '@/types/matricula/matricula.model'
import { InputBanco } from '@/components/input/input-banco'
import { InputText } from '@/components/input/input-text'
import { InputDate } from '@/components/input/input-date'

export const TabFinanceiro = () => {
  const { control } = useFormContext<MatriculaType>()

  return (
    <div className={'flex flex-col gap-4'}>
      <div
        className={
          'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
        }
      >
        <div className={'col-span-1 md:col-span-2 lg:col-span-3'}>
          <InputPrevidencia />
        </div>
      </div>
      <Fieldset.Root label={'Dados Bancários'}>
        <div
          className={
            'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }
        >
          <div className={'col-span-1'}>
            <InputBanco />
          </div>
          <div className={'col-span-1'}>
            <InputText label={'Agência'} control={control} name={''} />
          </div>
          <div className={'col-span-1'}>
            <InputText label={'Conta Bancária'} control={control} name={''} />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Fundo de Garantia do Tempo de Serviço'}>
        <div
          className={
            'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }
        >
          <div className={'col-span-1'}>
            <InputText label={'Código do Saque'} control={control} name={''} />
          </div>
          <div className={'col-span-1'}>
            <InputText label={'Agência'} control={control} name={''} />
          </div>
          <div className={'col-span-1'}>
            <InputText label={'Conta Bancária'} control={control} name={''} />
          </div>
          <div className={'col-span-1'}>
            <InputDate label={'Data de Adesão'} control={control} name={''} />
          </div>
        </div>
      </Fieldset.Root>
    </div>
  )
}
