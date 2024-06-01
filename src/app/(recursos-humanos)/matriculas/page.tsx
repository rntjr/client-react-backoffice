'use client'
import { matriculasMock } from '@/mocks/matriculas.mock'
import { DataTable, DataTableColumnHeader } from '@/components/ui/data-table'
import { ColumnDef } from '@tanstack/react-table'
import { MatriculaType } from '@/types/matricula/matricula.model'
import { Checkbox } from '@/components/ui/checkbox'
import { findLotacaoAtual } from '@/utils/find-lotacao-atual'
import { findCargoAtual } from '@/utils/find-cargo-atual'
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
import Link from 'next/link'
import { PageComponent } from '@/components/page'

const matriculas = matriculasMock

const columns: ColumnDef<MatriculaType>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      const checked =
        table.getIsAllPageRowsSelected() ||
        (table.getIsSomePageRowsSelected() && 'indeterminate')
      return (
        <Checkbox
          checked={checked}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      )
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'numeroMatricula',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Matricula" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.original.numeroMatricula}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'nomeCompleto',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => {
      return (
        <Link href={`/matriculas/${row.original.id}`}>
          <div className="flex space-x-2">
            <Badge variant={row.original.ativo ? 'success' : 'destructive'}>
              {row.original.ativo ? 'Ativo' : 'Inativo'}
            </Badge>
            <span className="max-w-[500px] truncate font-medium">
              {row.original.pessoa.nomeCompleto}
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
      return <div>{row.original.pessoa.cpf}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'cargos',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Cargo" />
    ),
    cell: ({ row }) => {
      return <div>{findCargoAtual({ cargos: row.original.cargos })}</div>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'lotacoes',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lotação" />
    ),
    cell: ({ row }) => {
      return <div>{findLotacaoAtual({ lotacoes: row.original.lotacoes })}</div>
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

export default function MatriculasPage() {
  return (
    <PageComponent.Root>
      <PageComponent.HeaderRoot>
        <PageComponent.HeaderTitle title="Matriculas" />
      </PageComponent.HeaderRoot>
      <PageComponent.Content>
        <DataTable data={matriculas} columns={columns} />
      </PageComponent.Content>
    </PageComponent.Root>
  )
}
