'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

interface NavbarMenuActionProps {
  name: string
}

export function NavbarMenuActionComponent({ name }: NavbarMenuActionProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
          <NavigationMenuContent className="py-4">
            <div className="px-5 pb-2">
              <span className="text-md font-bold">Alteração Orçamentaria</span>
            </div>
            <ul className="grid w-[400px] gap-3 px-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs" title="Créditos Adicionais">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Transposição">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Remanejamento"
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Transferência Financeira"
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
            <div className="px-5 py-2">
              <span className="text-md font-bold">Fluxo de despesa</span>
            </div>
            <ul className="grid w-[400px] gap-3 px-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/docs" title="Nota de Empenho">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Nota de Liquidação">
                How to install dependencies and structure your app.
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Ordem de Pagamento"
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
              <ListItem
                href="/docs/primitives/typography"
                title="Pagamento Extra-orçamentario"
              >
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
