'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import { LayoutContext } from '@/contexts/layout/layout.context'
import { SessionProvider } from 'next-auth/react'

type RootContextProps = {
  children: ReactNode
}

export const RootContext = ({ children }: RootContextProps) => {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <LayoutContext>{children}</LayoutContext>
      </ThemeProvider>
    </SessionProvider>
  )
}
