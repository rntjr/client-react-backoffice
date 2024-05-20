'use client'
import Link from 'next/link'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

type MenuItems = {
  label: string
  path?: string
  children?: MenuItems[]
}

export const SidenavRoot = () => {
  const menus: MenuItems[] = [
    {
      label: 'Cadastros',
      children: [
        {
          label: 'Pessoa Física',
          path: '/pessoa',
        },
        {
          label: 'Matriculas',
          path: '/matriculas',
        },
        {
          label: 'Cargo',
          path: '/',
        },
        {
          label: 'Vinculo Empregatício',
          path: '/',
        },
        {
          label: 'Lotação',
          path: '/',
        },
        {
          label: 'Tabela Salarial',
          path: '/',
        },
      ],
    },
    {
      label: 'Movimentações',
      children: [
        {
          label: 'Afastamento',
          path: '/',
        },
        {
          label: 'Movimentação de Pessoal',
          path: '/',
        },
      ],
    },
    {
      label: 'Prestação de Contas',
      children: [
        {
          label: 'TCM-GO',
          path: '/',
        },
        {
          label: 'e-Social',
          path: '/',
        },
        {
          label: 'SEFIP',
          path: '/',
        },
        {
          label: 'SIOPE',
          path: '/',
        },
        {
          label: 'SIOPS',
          path: '/',
        },
      ],
    },
    {
      label: 'Gerênciais',
    },
    {
      label: 'Relatórios',
    },
  ]

  return (
    <aside
      id="left-sidebar"
      className="fixed h-screen w-64 -translate-x-full border-r bg-background transition-transform dark:border-gray-800 dark:bg-gray-900 xl:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col overflow-y-auto py-4 ">
        <ListItem menus={menus} />
      </div>
    </aside>
  )
}

const buttonItem = cva(
  'flex h-10 w-full flex-row items-center justify-between px-4 py-2 text-sm transition-all dark:hover:bg-blue-950 hover:bg-blue-100 border-b border-b-muted/100',
)

const Item = ({ menu }: { menu: MenuItems }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col">
      {!menu.children ? (
        <Link href={menu.path || '#'} className="flex flex-row">
          <button className={cn(buttonItem())}>
            <span className="text-md flex flex-row items-center text-start font-medium leading-none">
              <EnvelopeOpenIcon className="mr-5 h-4 w-4" />
              {menu.label}
            </span>
          </button>
        </Link>
      ) : (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <button className={cn(buttonItem())}>
              <span className="text-md flex flex-row items-center text-start font-medium leading-none">
                <EnvelopeOpenIcon className="mr-5 h-4 w-4" />
                {menu.label}
              </span>
              <ChevronDown
                className={`transform transition-all duration-75 ${
                  open ? 'rotate-180' : 'rotate-0'
                }`}
              />
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="bg-muted/50">
              <ListItem menus={menu.children} />
            </div>
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  )
}

const ListItem = ({ menus }: { menus: MenuItems[] }) => {
  return menus.map((menu, index) => <Item key={index} menu={menu} />)
}
