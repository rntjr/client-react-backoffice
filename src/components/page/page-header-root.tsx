import { ReactNode } from 'react'

interface PageHeaderRootProps {
  children: ReactNode
}
export default function PageHeaderRootComponent({
  children,
}: PageHeaderRootProps) {
  return (
    <div className="flex items-center justify-between space-y-2">
      {children}
    </div>
  )
}
