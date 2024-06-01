import { ReactNode } from 'react'

interface PageContentProps {
  children: ReactNode
}

export default function PageContentComponent({ children }: PageContentProps) {
  return <div>{children}</div>
}
