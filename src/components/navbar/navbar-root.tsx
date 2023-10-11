'use client'
import { NavbarMenuActionComponent } from '@/components/navbar/navbar-menu-action'
import { NavbarMenuRootComponent } from '@/components/navbar/navbar-menu-root'
import { NavbarLogoComponent } from '@/components/navbar/navbar-logo'
import { NavbarMenuActionsComponent } from '@/components/navbar/navbar-menu-actions'
import { actionsMocks } from '@/mocks/navbar-menu-actions'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

const actions = actionsMocks

export default function NavbarRootComponent() {
  const { setTheme } = useTheme()
  return (
    <div className="flex-col md:flex">
      <div className="border-b">
        <div className="flex h-14 items-center px-4">
          <div className="flex space-x-6">
            <NavbarLogoComponent />
            <NavbarMenuRootComponent>
              <NavbarMenuActionsComponent>
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 w-max items-center justify-center bg-background px-4 py-2 text-sm font-medium"
                >
                  Dashboard
                </Link>
                {actions.map(({ name, items }) => (
                  <NavbarMenuActionComponent
                    key={name}
                    name={name}
                    items={items}
                  />
                ))}
              </NavbarMenuActionsComponent>
            </NavbarMenuRootComponent>
          </div>
          <div className="ml-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('system')}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
