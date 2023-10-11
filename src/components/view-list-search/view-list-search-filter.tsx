'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ReactNode } from 'react'

interface ViewListSearchFilter {
  children: ReactNode
}

export function ViewListSearchFilter({ children }: ViewListSearchFilter) {
  return (
    <div className="col-span-1">
      <Card>
        <CardHeader>
          <CardTitle>Filtros</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </div>
  )
}
