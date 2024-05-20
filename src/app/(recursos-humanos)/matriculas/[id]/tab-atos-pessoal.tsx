import { useFormContext } from 'react-hook-form'
import { MatriculaType } from '@/types/matricula/matricula.model'
import { InputDecretoNomeacao } from '@/components/input/input-decreto-nomeacao'
import { InputDate } from '@/components/input/input-date'
import { Fieldset } from '@/components/Fieldset'
import { InputSwitch } from '@/components/input/input-switch'
import { InputDecretoHomologacaoEstagio } from '@/components/input/input-decreto-homologacao-estagio'
import { InputSelect } from '@/components/input/input-select'
import { InputText } from '@/components/input/input-text'
import { InputSupervisor } from '@/components/input/input-supervisor'
import { InputTextarea } from '@/components/input/input-textarea'
import { InputSimNao } from '@/components/input/input-sim-nao'

export const TabAtosPessoal = () => {
  const form = useFormContext<MatriculaType>()

  return (
    <div className={'flex flex-col gap-6'}>
      <Fieldset.Root label={'Nomeação'}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className={'col-span-1'}>
            <InputDecretoNomeacao />
          </div>
          <div className="col-span-1">
            <InputDate
              name={'dataPosse'}
              label={'Data da Posse'}
              control={form.control}
            />
          </div>
          <div className="col-span-1">
            <InputDate
              name={'dataAdmissao'}
              label={'Data de Admissão'}
              control={form.control}
            />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Estágio'}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1">
            <InputSelect
              label={'Tipo do Estágio'}
              control={form.control}
              name={''}
            />
          </div>
          <div className="col-span-1">
            <InputDate
              name={'dataAdmissao'}
              label={'Data de Início'}
              control={form.control}
            />
          </div>
          <div className="col-span-1">
            <InputDate
              name={'dataAdmissao'}
              label={'Data de Término'}
              control={form.control}
            />
          </div>
          <div className="col-span-1">
            <InputSimNao
              name={'isRemunerado'}
              label={'Remunerado?'}
              control={form.control}
            />
          </div>
          <div className="col-span-2">
            <InputSupervisor />
          </div>
          <div className="col-span-2">
            <InputDecretoHomologacaoEstagio />
          </div>
          <div className="col-span-4">
            <InputTextarea
              label={'Atividades'}
              name={''}
              control={form.control}
            />
          </div>
        </div>
      </Fieldset.Root>
      <Fieldset.Root label={'Reintegração'}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="col-span-1">
            <InputText
              name={'dataAdmissao'}
              label={'Número do Processo Judicial'}
              control={form.control}
            />
          </div>
          <div className="col-span-1">
            <InputText
              name={'dataAdmissao'}
              label={'Número do Processo Administrativo'}
              control={form.control}
            />
          </div>
          <div className="col-span-1">
            <InputDate
              name={'dataAdmissao'}
              label={'Data da Reintegração'}
              control={form.control}
            />
          </div>
          <div className="col-span-4">
            <InputTextarea
              name={'dataAdmissao'}
              label={'Justificativa para Reintegração'}
              control={form.control}
            />
          </div>
        </div>
      </Fieldset.Root>
    </div>
  )
}
