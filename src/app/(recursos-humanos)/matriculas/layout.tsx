import { PageComponent } from '@/components/page'
import { ReactNode } from 'react'

interface EmpenhosLayoutProps {
  children: ReactNode
}

export default function EmpenhosLayout({ children }: EmpenhosLayoutProps) {
  return (
    <PageComponent.Root>
      <PageComponent.HeaderRoot>
        <PageComponent.HeaderTitle title="Matriculas" />
      </PageComponent.HeaderRoot>
      <PageComponent.Content>{children}</PageComponent.Content>
    </PageComponent.Root>
  )
}
