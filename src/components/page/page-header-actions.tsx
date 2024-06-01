import { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

type PageHeaderActionsProps = {
  children: ReactNode
  salvar?: {
    onSalvar?: () => void
    disabled?: boolean
  }
  excluir?: {
    onExcluir?: () => void
    disabled?: boolean
  }
  actionsOptions?: any[]
}

export default function PageHeaderActionsComponent({
  actionsOptions,
  salvar,
  excluir,
  children,
}: PageHeaderActionsProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button variant={'success'} disabled={salvar?.disabled}>
        Salvar
      </Button>
      <Button variant={'destructive'} disabled={excluir?.disabled}>
        Excluir
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex  data-[state=open]:bg-muted">
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem>Excluir</DropdownMenuItem>
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
