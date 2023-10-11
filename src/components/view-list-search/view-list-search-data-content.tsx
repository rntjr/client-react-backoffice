'use client'

import { ReactNode } from 'react'
import { CardContent } from '@/components/ui/card'

interface ViewListSearchDataContentProps {
  children: ReactNode
}

export function ViewListSearchDataContent({
  children,
}: ViewListSearchDataContentProps) {
  return <CardContent>{children}</CardContent>
}
