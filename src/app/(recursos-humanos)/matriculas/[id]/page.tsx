'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { matriculasMock } from '@/mocks/matriculas.mock'
import { findLotacaoAtual } from '@/utils/find-lotacao-atual'
import { findCargoAtual } from '@/utils/find-cargo-atual'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  MatriculaSchema,
  MatriculaType,
} from '@/types/matricula/matricula.model'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Badge } from '@/components/ui/badge'
import { TabAtosPessoal } from '@/app/(recursos-humanos)/matriculas/[id]/tab-atos-pessoal'
import { TabCargos } from '@/app/(recursos-humanos)/matriculas/[id]/tab-cargos'
import { TabFinanceiro } from '@/app/(recursos-humanos)/matriculas/[id]/tab-financeiro'

interface MatriculaEditPageProps {
  params: {
    id: string
  }
}

export default function MatriculaEditPage({ params }: MatriculaEditPageProps) {
  const matricula = matriculasMock.find((item) => item.id === params.id)

  const defaultValues: Partial<MatriculaType> = matricula

  const form = useForm<MatriculaType>({
    resolver: zodResolver(MatriculaSchema),
    defaultValues,
  })

  return (
    <div className={'flex flex-col gap-4'}>
      <Card>
        <CardContent className="flex cursor-pointer flex-col items-center gap-5 rounded-md p-5 hover:bg-muted/50 md:flex-row">
          <Avatar className="h-[100px] w-[100px] md:me-2">
            <AvatarImage src={matricula.pessoa.urlFoto} alt="@shadcn" />
            <AvatarFallback>RJ</AvatarFallback>
          </Avatar>
          <div className={'flex flex-col items-center py-2 md:items-start'}>
            <div className={'flex flex-row items-start gap-2 md:items-center'}>
              <Badge variant={'secondary'}>{matricula.numeroMatricula}</Badge>
              <span className={'text-lg'}>{matricula.pessoa.nomeCompleto}</span>
            </div>
            <span className={'text-md text-gray-500'}>
              {findLotacaoAtual(matricula)}
            </span>
            <span className={'text-md text-gray-500'}>
              {findCargoAtual(matricula)}
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Tabs defaultValue="atosPessoal" className="w-full">
            <TabsList>
              <TabsTrigger value="atosPessoal">Atos de Pessoal</TabsTrigger>
              <TabsTrigger value="cargo">Cargo</TabsTrigger>
              <TabsTrigger value="financeiro">Financeiro</TabsTrigger>
              <TabsTrigger value="gratificacao">Gratificação</TabsTrigger>
              <TabsTrigger value="lotacao">Lotação</TabsTrigger>
              <TabsTrigger value="historicoFuncional">
                Historico Funcional
              </TabsTrigger>
            </TabsList>
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(() => {
                  //
                })}
              >
                <TabsContent value="atosPessoal">
                  <TabAtosPessoal />
                </TabsContent>
                <TabsContent value="cargo">
                  <TabCargos />
                </TabsContent>
                <TabsContent value="financeiro">
                  <TabFinanceiro />
                </TabsContent>
                <TabsContent value="gratificacao">Gratificação.</TabsContent>
                <TabsContent value="lotacao">Lotação.</TabsContent>
                <TabsContent value="historicoFuncional">
                  Historico Funcional.
                </TabsContent>
              </form>
            </FormProvider>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
