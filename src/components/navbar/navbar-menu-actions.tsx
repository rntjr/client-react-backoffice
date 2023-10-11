'use client'
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { ReactNode } from 'react'

interface NavbarMenuActionsProps {
  children: ReactNode
}

export function NavbarMenuActionsComponent({
  children,
}: NavbarMenuActionsProps) {
  return (
    <NavigationMenu>
      <NavigationMenuList>{children}</NavigationMenuList>
    </NavigationMenu>
  )
}
