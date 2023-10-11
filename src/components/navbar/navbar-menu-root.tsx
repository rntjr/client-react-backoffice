import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface NavbarMenuRootProps {
  children: ReactNode
  className?: string
}
export function NavbarMenuRootComponent({
  children,
  className,
}: NavbarMenuRootProps) {
  return (
    <nav
      className={cn(
        'hidden items-center space-x-4 lg:flex lg:space-x-6',
        className,
      )}
    >
      {children}
    </nav>
  )
}
