import { DataTable, DataTableColumnHeader } from '@/components/ui/data-table'
import { useFormContext } from 'react-hook-form'
import { PessoaType } from '@/types/matricula/pessoa.model'
import { ColumnDef } from '@tanstack/react-table'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ContatoType } from '@/types/common/contato.model'

const columns: ColumnDef<ContatoType>[] = [
  {
    accessorKey: 'tipoDescricao',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tipo" />
    ),
    cell: ({ row }) => (
      <div className={'flex flex-row gap-2'}>{row.original.tipo.descricao}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'descricao',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => <div>{row.original.descricao}</div>,
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

export const TabContatos = () => {
  const { watch } = useFormContext<PessoaType>()

  const contatosWatch = watch('contato')

  return (
    <div className={'flex flex-col'}>
      <DataTable columns={columns} data={contatosWatch} />
    </div>
  )
}
