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

export const InputNaturalidade = () => {
  return (
    <FormItem className="flex flex-col">
      <FormLabel>Naturalidade</FormLabel>
      <FormControl>
        <Dialog>
          <DialogTrigger className={'flex flex-row justify-start'}>
            <Button
              variant={'outline'}
              size={'sm'}
              className={'w-full justify-start pl-3 font-normal shadow-sm'}
            >
              <span>{`Itapeva - SP`}</span>
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
    <DialogContent className="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>Decreto de Nomeação</DialogTitle>
        <DialogDescription>Dados de Decreto de Nomeação</DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className={'col-span-1'}>
            <InputNumeroAno
              control={control}
              label="Decreto de Nomeação"
              nameInput1="decreto.numero"
              nameInput2="decreto.ano"
            />
          </div>
          <div className={'col-span-1'}>
            <InputNumeroAno
              control={control}
              label="Decreto de Nomeação"
              nameInput1="decreto.numero"
              nameInput2="decreto.ano"
            />
          </div>
          <div className={'col-span-1'}>
            <InputDate
              name={'dataNomeacao'}
              label={'Data da Nomeação'}
              control={control}
            />
          </div>
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="submit">Salvar</Button>
        </DialogClose>
        <DialogClose asChild>
          <Button variant={'secondary'}>Voltar</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  )
}
