import { Button } from '@/components/ui/button'
import { DataTable, DataTableColumnHeader } from '@/components/ui/data-table'
import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { useFormContext } from 'react-hook-form'
import { DependenteType } from '@/types/matricula/dependente.model'
import { DateUtils } from '@/utils/date.utils'
import { dependentesMock } from '@/mocks/dependentes.mock'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { InputDate } from '@/components/input/input-date'
import { DialogClose } from '@radix-ui/react-dialog'
import { InputText } from '@/components/input/input-text'
import { InputSelect } from '@/components/input/input-select'
import { InputSwitch } from '@/components/input/input-switch'
import { InputSimNao } from '@/components/input/input-sim-nao'
import { InputReadOnly } from '@/components/input/input-read-only'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const columns: ColumnDef<DependenteType>[] = [
  {
    accessorKey: 'nomeCompleto',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => <div>{row.original.nomeCompleto}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'dataNascimento',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de Nascimento" />
    ),
    cell: ({ row }) => (
      <div>{DateUtils.IsoToBr(row.original.dataNascimento)}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cpf',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPF" />
    ),
    cell: ({ row }) => <div>{row.original.cpf}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'parentesco',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Parentesco" />
    ),
    cell: ({ row }) => <div>{row.original.parentesco}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export const TabDependentes = () => {
  const dependentes = dependentesMock

  return (
    <div className={'flex flex-col gap-4'}>
      <DataTable
        columns={columns}
        data={dependentes}
        adicionarDialogContent={DialogAdicionarDependentes}
      />
    </div>
  )
}

const DialogAdicionarDependentes = () => {
  const { control, watch } = useFormContext<DependenteType>()

  const dataLimiteIRRF = watch('dataLimiteIRPF')
  const dataLimiteSalarioFamilia = watch('dataLimiteSalarioFamilia')

  return (
    <DialogContent className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <DialogHeader>
        <DialogTitle>Adicionar Dependente</DialogTitle>
        <DialogDescription>Dependente</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 py-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className={'col-span-1 md:col-span-3'}>
            <InputText control={control} label={'Nome'} name={'nomeCompleto'} />
          </div>
          <div className={'col-span-1'}>
            <InputSelect
              control={control}
              label={'Parentesco'}
              name={'parentesco'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputText control={control} label={'CPF'} name={'cpf'} />
          </div>
          <div className={'col-span-1'}>
            <InputDate
              control={control}
              label={'Data de Nascimento'}
              name={'dataNascimento'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSelect control={control} label={'Sexo'} name={'sexo'} />
          </div>
          <div className={'col-span-1'}>
            <InputSelect
              control={control}
              label={'Estado Civíl'}
              name={'estadoCivil'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSimNao
              control={control}
              label={'Universitário?'}
              name={'isUniversitario'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSimNao
              control={control}
              label={'Dependente Financeiro?'}
              name={'isDependenteFinanceiro'}
            />
          </div>
          <div className={'col-span-1'}>
            <InputSimNao
              control={control}
              label={'PcD?'}
              name={'isDependentePcD'}
            />
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <span className={'text-lg font-medium'}>Avançado</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <div className={'col-span-1'}>
                  <InputReadOnly
                    label={'Data Limite IRRF'}
                    value={DateUtils.IsoToBr(dataLimiteIRRF)}
                  />
                </div>
                <div className={'col-span-1'}>
                  <InputReadOnly
                    label={'Data Limite Salário Familia'}
                    value={DateUtils.IsoToBr(dataLimiteSalarioFamilia)}
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
