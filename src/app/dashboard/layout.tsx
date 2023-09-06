import { ReactNode } from 'react'
import { PageComponent } from '@/components/page'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <PageComponent.Root>
      <PageComponent.HeaderRoot>
        <PageComponent.HeaderTitle title="Dashboard" />
      </PageComponent.HeaderRoot>
      <PageComponent.Content>{children}</PageComponent.Content>
    </PageComponent.Root>
  )
}
