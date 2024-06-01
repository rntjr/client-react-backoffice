'use client'
import { PageComponent } from '@/components/page'
import PessoaEditForm from '@/forms/pessoa/pessoa-edit.form'

type PessoaEditPageProps = {
  params: {
    id: string
  }
}

export default function PessoaEditPage({ params }: PessoaEditPageProps) {
  return (
    <PageComponent.Root>
      <PageComponent.HeaderRoot>
        <PageComponent.HeaderTitle title="Pessoas" />
        <PageComponent.Header.Actions>
          <div />
        </PageComponent.Header.Actions>
      </PageComponent.HeaderRoot>
      <PageComponent.Content>
        <PessoaEditForm id={params.id} />
      </PageComponent.Content>
    </PageComponent.Root>
  )
}
