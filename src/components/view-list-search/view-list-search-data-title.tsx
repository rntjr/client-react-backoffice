'use client'

import { CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

interface ViewListSearchDataHeaderTitleProps {
  children: ReactNode
}

export function ViewListSearchDataTitle({
  children,
}: ViewListSearchDataHeaderTitleProps) {
  return (
    <CardTitle className="text-md text-muted-foreground">{children} </CardTitle>
  )
}
