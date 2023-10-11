'use client'
import { ViewListSearch } from '@/components/view-list-search'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { PlusIcon } from '@radix-ui/react-icons'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { matriculasMock } from '@/mocks/matriculas.mock'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { findLotacaoAtual } from '@/utils/find-lotacao-atual'
import { findCargoAtual } from '@/utils/find-cargo-atual'

const matriculas = matriculasMock

const filtroMatriculaSchema = z.object({
  matricula: z.number().optional(),
  nome: z.number().optional(),
})

type FiltroMatriculaValues = z.infer<typeof filtroMatriculaSchema>

const defaultValues: Partial<FiltroMatriculaValues> = {
  matricula: undefined,
  nome: undefined,
}

export default function MatriculasPage() {
  const form = useForm<FiltroMatriculaValues>({
    resolver: zodResolver(filtroMatriculaSchema),
    defaultValues,
    mode: 'onChange',
  })

  function onSubmit(data: FiltroMatriculaValues) {
    console.log(data)
  }

  return (
    <ViewListSearch.Root>
      <ViewListSearch.Filter>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="matricula"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matricula</FormLabel>
                  <FormControl>
                    <Input placeholder="1122333" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="FULANO DE TAL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex space-x-4">
              <Button variant={'ghost'} className="ml-auto">
                Limpar
              </Button>
              <Button variant={'ghost'} type="submit" className="ml-auto">
                Pesquisar
              </Button>
            </div>
          </form>
        </Form>
      </ViewListSearch.Filter>
      <ViewListSearch.Data.Root>
        <ViewListSearch.Data.Header>
          <ViewListSearch.Data.Title>
            Total: 10 registros.
          </ViewListSearch.Data.Title>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'success'}>
                <PlusIcon className="mr-2 h-4 w-4" />
                Nova Matricula
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Novo Empenho</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value="Pedro Duarte"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input
                    id="username"
                    value="@peduarte"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </ViewListSearch.Data.Header>
        <ViewListSearch.Data.Content>
          {matriculas.map((matricula) => (
            <Link href={`/matriculas/${matricula.id}`} key={matricula.id}>
              <div className="group rounded-lg p-4 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                <div className="flex flex-col place-items-center space-y-1 lg:flex-row lg:place-items-start lg:space-x-2 lg:space-y-0">
                  <Badge variant={'default'} size={'sm'}>
                    {`${matricula.numeroMatricula}`}
                  </Badge>
                  <div className="space-y-1 text-center lg:text-start">
                    <div className="flex flex-col items-center space-y-1 lg:flex-row lg:space-x-2 lg:space-y-0">
                      <p className="text-md font-bold leading-none">
                        {`${matricula.pessoa.nomeCompleto.toUpperCase()}`}
                      </p>
                      <p className="text-sm font-normal leading-none text-muted-foreground">
                        {`${matricula.pessoa.cpf}`}
                      </p>
                      <p className="text-sm font-medium leading-none text-muted-foreground">
                        {`${matricula.ativo ? 'ATIVO' : 'INATIVO'}`}
                      </p>
                    </div>
                    <p className="text-md truncate leading-none text-muted-foreground">
                      {findLotacaoAtual(matricula)}
                    </p>
                    <p className="text-md truncate leading-none text-muted-foreground">
                      {findCargoAtual(matricula)}
                    </p>
                  </div>
                  <div className="text-center lg:flex-grow lg:truncate lg:text-end">
                    <small className="font-light text-muted-foreground">
                      {matricula.id}
                    </small>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </ViewListSearch.Data.Content>
      </ViewListSearch.Data.Root>
    </ViewListSearch.Root>
  )
}
