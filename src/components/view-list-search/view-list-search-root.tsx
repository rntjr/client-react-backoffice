'use client'
import { ReactNode } from 'react'

interface ViewListSearchRootProps {
  children: ReactNode
}

export function ViewListSearchRoot({ children }: ViewListSearchRootProps) {
  return <div className="grid grid-cols-1">{children}</div>
}
