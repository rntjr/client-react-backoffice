'use client'
import { Card, CardContent } from '@/components/ui/card'
import { InputText } from '@/components/input/input-text'
import { FormProvider, useForm } from 'react-hook-form'
import { PessoaSchema, PessoaType } from '@/types/matricula/pessoa.model'
import { InputDate } from '@/components/input/input-date'
import { InputSelect } from '@/components/input/input-select'
import { zodResolver } from '@hookform/resolvers/zod'
import { pessoasMock } from '@/mocks/matriculas.mock'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { TabDadosPessoais } from '@/app/(recursos-humanos)/pessoa/[id]/tab-dados-pessoais'
import { TabDocumentos } from '@/app/(recursos-humanos)/pessoa/[id]/tab-documentos'
import { TabContatos } from '@/app/(recursos-humanos)/pessoa/[id]/tab-contatos'
import { TabDependentes } from '@/app/(recursos-humanos)/pessoa/[id]/tab-dependentes'

type PessoaEditPageProps = {
  params: {
    id: string
  }
}

export default function PessoaEditPage({ params }: PessoaEditPageProps) {
  const pessoa = pessoasMock.find((item) => item.id === params.id)

  const defaultValues: Partial<PessoaType> = pessoa

  const form = useForm<PessoaType>({
    resolver: zodResolver(PessoaSchema),
    defaultValues,
  })

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(() => {
          //
        })}
      >
        <Card>
          <CardContent>
            <div className={'flex flex-col gap-6 md:flex-row-reverse'}>
              <div className={'flex items-center justify-center'}>
                <Avatar className="h-[200px] w-[200px] md:me-2">
                  <AvatarImage src={pessoa.urlFoto} alt="@shadcn" />
                  <AvatarFallback>RJ</AvatarFallback>
                </Avatar>
              </div>
              <div className={'flex-1'}>
                <div
                  className={
                    'grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3'
                  }
                >
                  <div className={'col-span-1 md:col-span-3'}>
                    <InputText
                      control={form.control}
                      label={'Nome'}
                      name={'nomeCompleto'}
                    />
                  </div>
                  <div className={'col-span-1 md:col-span-3'}>
                    <InputText
                      control={form.control}
                      label={'Nome Social'}
                      name={'nomeSocial'}
                    />
                  </div>
                  <div className={'col-span-1'}>
                    <InputText
                      control={form.control}
                      label={'CPF'}
                      name={'cpf'}
                    />
                  </div>
                  <div className={'col-span-1'}>
                    <InputDate
                      control={form.control}
                      label={'Data de Nascimento'}
                      name={'dataNascimento'}
                    />
                  </div>
                  <div className={'col-span-1'}>
                    <InputSelect
                      control={form.control}
                      label={'Sexo'}
                      name={'sexo'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Tabs defaultValue="dependentes" className="mt-4 w-full">
              <TabsList>
                <TabsTrigger value="dadosPessoais">Dados Pessoais</TabsTrigger>
                <TabsTrigger value="documentos">Documentos</TabsTrigger>
                <TabsTrigger value="contato">Contato</TabsTrigger>
                <TabsTrigger value="dependentes">Dependentes</TabsTrigger>
              </TabsList>
              <TabsContent value="dadosPessoais">
                <TabDadosPessoais />
              </TabsContent>
              <TabsContent value="documentos">
                <TabDocumentos />
              </TabsContent>
              <TabsContent value={'contato'}>
                <TabContatos />
              </TabsContent>
              <TabsContent value={'dependentes'}>
                <TabDependentes />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  )
}
