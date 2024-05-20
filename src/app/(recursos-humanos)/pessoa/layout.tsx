import { PageComponent } from '@/components/page'
import { ReactNode } from 'react'

interface PessoaLayoutProps {
  children: ReactNode
}

export default function PessoaLayout({ children }: PessoaLayoutProps) {
  return (
    <PageComponent.Root>
      <PageComponent.HeaderRoot>
        <PageComponent.HeaderTitle title="Pessoas" />
      </PageComponent.HeaderRoot>
      <PageComponent.Content>{children}</PageComponent.Content>
    </PageComponent.Root>
  )
}
