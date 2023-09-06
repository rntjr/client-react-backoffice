import { ReactNode } from 'react'

interface PageHeaderActionsProps {
  children: ReactNode
}

export default function PageHeaderActionsComponent({
  children,
}: PageHeaderActionsProps) {
  return <div className="flex items-center space-x-2">{children}</div>
}
