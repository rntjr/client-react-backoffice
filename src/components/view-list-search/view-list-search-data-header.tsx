'use client'

import { CardHeader } from '@/components/ui/card'
import { ReactNode } from 'react'

interface ViewListSearchDataHeaderProps {
  children: ReactNode
}

export function ViewListSearchDataHeader({
  children,
}: ViewListSearchDataHeaderProps) {
  return (
    <CardHeader>
      <div className="flex items-center justify-between">{children}</div>
    </CardHeader>
  )
}
