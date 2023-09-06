import { ReactNode } from 'react'

interface NavbarMenuRootProps {
  children: ReactNode
}
export function NavbarMenuRootComponent({ children }: NavbarMenuRootProps) {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">{children}</nav>
  )
}
