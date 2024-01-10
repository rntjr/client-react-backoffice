import { useFormContext } from 'react-hook-form'
import { MatriculaType } from '@/types/matricula/matricula.model'
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { InputNumeroAno } from '@/components/input/input-numero-ano'
import { InputDate } from '@/components/input/input-date'
import { DialogClose } from '@radix-ui/react-dialog'
import { InputText } from '@/components/input/input-text'

export const InputDecretoHomologacaoEstagio = () => {
  const { watch } = useFormContext<MatriculaType>()

  const numeroDecretoWatch = watch('decreto.numero')
  const anoDecretoWatch = watch('decreto.ano')

  return (
    <FormItem className="flex flex-col">
      <FormLabel>Decreto de Homologação</FormLabel>
      <FormControl>
        <Dialog>
          <DialogTrigger className={'flex flex-row justify-start'}>
            <Button
              variant={'outline'}
              size={'sm'}
              className={'w-full justify-start pl-3 font-normal shadow-sm'}
            >
              <span>{`${numeroDecretoWatch} / ${anoDecretoWatch} - Boletim Oficial`}</span>
            </Button>
          </DialogTrigger>
          <SalvarDecretoDialogContent />
        </Dialog>
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

const SalvarDecretoDialogContent = () => {
  const { control } = useFormContext<MatriculaType>()
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Decreto de Homologação de Estágio</DialogTitle>
        <DialogDescription>
          Dados de Decreto de Homologação de Estágio
        </DialogDescription>
      </DialogHeader>
      <div className="my-2 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className={'col-span-1'}>
          <InputNumeroAno
            control={control}
            label="Decreto de Nomeação"
            nameInput1="decreto.numero"
            nameInput2="decreto.ano"
          />
        </div>
        <div className={'col-span-2'}>
          <InputText
            name={'dataNomeacao'}
            label={'Boletim Oficial'}
            control={control}
          />
        </div>
        <div className={'col-span-1'}>
          <InputDate
            name={'dataNomeacao'}
            label={'Data de Publicação'}
            control={control}
          />
        </div>
        <div className={'col-span-1'}>
          <InputDate
            name={'dataNomeacao'}
            label={'Data da Homologação'}
            control={control}
          />
        </div>
        <div className={'col-span-1'}>
          <InputDate
            name={'dataNomeacao'}
            label={'Data da Efetivação'}
            control={control}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button variant={'secondary'}>Voltar</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button type="submit">Salvar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
