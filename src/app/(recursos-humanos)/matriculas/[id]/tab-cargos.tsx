import { useFormContext } from 'react-hook-form'
import { MatriculaType } from '@/types/matricula/matricula.model'
import { findCargoAtual } from '@/utils/find-cargo-atual'
import { InputReadOnly } from '@/components/input/input-read-only'
import { DataTable, DataTableColumnHeader } from '@/components/ui/data-table'
import { ColumnDef } from '@tanstack/react-table'
import { DateUtils } from '@/utils/date.utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Badge } from '@/components/ui/badge'

const columns: ColumnDef<any>[] = [
  {
    accessorKey: 'descricao',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição do Cargo" />
    ),
    cell: ({ row }) => (
      <div className={'flex flex-row gap-2'}>
        {row.original.cargo.descricao}
        {row.original.atual && <Badge variant={'success'}>Atual</Badge>}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'inicio',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de Início" />
    ),
    cell: ({ row }) => <div>{DateUtils.IsoToBr(row.original.dataInicio)}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'fim',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de Término" />
    ),
    cell: ({ row }) => <div>{DateUtils.IsoToBr(row.original.dataFim)}</div>,
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

export const TabCargos = () => {
  const { watch } = useFormContext<MatriculaType>()

  const cargosWatch = watch('cargos')

  return (
    <div className={'flex flex-col gap-2'}>
      <div className={'flex flex-col items-end justify-between md:flex-row'}>
        <InputReadOnly
          label={'Cargo Atual'}
          value={findCargoAtual({ cargos: cargosWatch })}
        />
        <Button variant={'secondary'} className={'min-w-[200px]'}>
          Adicionar
        </Button>
      </div>
      <DataTable data={cargosWatch} columns={columns} />
    </div>
  )
}
