'use client'
import { DataTable, DataTableColumnHeader } from '@/components/ui/data-table'
import { pessoasMock } from '@/mocks/matriculas.mock'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { PessoaType } from '@/types/matricula/pessoa.model'
import { DateUtils } from '@/utils/date.utils'
import { PageComponent } from '@/components/page'

const pessoas = pessoasMock

const columns: ColumnDef<PessoaType>[] = [
  {
    accessorKey: 'nomeCompleto',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/pessoa/${row.original.id}`}>
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.original.nomeCompleto}
            </span>
          </div>
        </Link>
      )
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cpf',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CPF" />
    ),
    cell: ({ row }) => {
      return <div>{row.original.cpf}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'dataNascimento',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Data de Nascimento" />
    ),
    cell: ({ row }) => {
      return <div>{DateUtils.IsoToBr(row.original.dataNascimento)}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: 'actions',
    cell: ({ row }) => (
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
          <Link href={`/matriculas/${row.original.id}`}>
            <DropdownMenuItem>Editar</DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
  },
]

export default function PessoaPage() {
  return <DataTable data={pessoas} columns={columns} />
}
