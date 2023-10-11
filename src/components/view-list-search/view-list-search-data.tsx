'use client'
import { ReactNode } from 'react'
import { Card } from '@/components/ui/card'

interface ViewListSearchDataProps {
  children: ReactNode
}

export function ViewListSearchData({ children }: ViewListSearchDataProps) {
  return (
    <div className="col-span-1 md:space-y-3 lg:col-span-3">
      <Card>{children}</Card>
    </div>
  )
}
