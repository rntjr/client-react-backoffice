import { ReactNode } from 'react'
import { NavbarComponent } from '@/contexts/layout/components/navbar'
import { Sidenav } from '@/contexts/layout/components/sidenav'

type LayoutContextProps = {
  children: ReactNode
}

export const LayoutContext = ({ children }: LayoutContextProps) => {
  return (
    <>
      <NavbarComponent.Root />
      <Sidenav.Root />
      <div className="p-0 xl:ml-64">{children}</div>
    </>
  )
}
