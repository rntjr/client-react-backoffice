'use client'
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

interface ListItemProps {
  title: string
  href: string
  description: string
}
export interface NavbarMenuGroupItemListProps {
  name: string
  items: ListItemProps[]
}

export interface NavbarMenuActionProps {
  name: string
  items: NavbarMenuGroupItemListProps[]
}

export function NavbarMenuActionComponent({
  name,
  items,
}: NavbarMenuActionProps) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{name}</NavigationMenuTrigger>
      <NavigationMenuContent className="pb-4">
        {items.map(({ name, items }) => (
          <NavbarMenuGroupItemList key={name} name={name} items={items} />
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

function NavbarMenuGroupItemList({
  name,
  items,
}: NavbarMenuGroupItemListProps) {
  return (
    <div>
      <div className="px-5 pb-2 pt-4">
        <span className="text-md font-bold">{name}</span>
      </div>
      <ul className="grid w-[600px] gap-2 px-4 md:w-[700px] md:grid-cols-4 lg:w-[900px]">
        {items.map(({ title, href, description }) => (
          <ListItem key={href} href={href} title={title}>
            {description}
          </ListItem>
        ))}
      </ul>
    </div>
  )
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <TooltipProvider>
            <Tooltip delayDuration={200}>
              <TooltipTrigger asChild>
                <a
                  ref={ref}
                  className={cn(
                    'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                    className,
                  )}
                  {...props}
                >
                  <div className="text-sm font-medium leading-none">
                    {title}
                  </div>
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                  </p>
                </a>
              </TooltipTrigger>
              <TooltipContent side={'bottom'}>
                <p>{children}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = 'ListItem'
