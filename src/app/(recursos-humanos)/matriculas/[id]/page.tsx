'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { matriculasMock } from '@/mocks/matriculas.mock'
import { findLotacaoAtual } from '@/utils/find-lotacao-atual'
import { findCargoAtual } from '@/utils/find-cargo-atual'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  matriculaSchema,
  MatriculaSchemaProps,
} from '@/models/matricula/matricula.model'
import { useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { CalendarIcon } from '@radix-ui/react-icons'
import { Calendar } from '@/components/ui/calendar'
import { Input } from '@/components/ui/input'

interface MatriculaEditPageProps {
  params: {
    id: string
  }
}

export default function MatriculaEditPage({ params }: MatriculaEditPageProps) {
  const matricula = matriculasMock.find((item) => item.id === params.id)

  const defaultValues: Partial<MatriculaSchemaProps> = {
    id: matricula.id,
    ativo: matricula.ativo,
    dataAdmissao: matricula.dataAdmissao,
    dataPosse: matricula.dataPosse,
    dataNomeacao: matricula.dataNomeacao,
  }

  const form = useForm<MatriculaSchemaProps>({
    resolver: zodResolver(matriculaSchema),
    defaultValues,
  })

  return (
    <Card>
      <CardContent>
        <div className="align-center flex flex-col place-items-center space-y-1 lg:flex-row lg:place-items-center lg:space-x-2 lg:space-y-0">
          <Avatar className="h-[72px] w-[72px] md:me-2">
            <AvatarImage src={matricula.pessoa.urlFoto} alt="@shadcn" />
            <AvatarFallback>RJ</AvatarFallback>
          </Avatar>
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
          <div className="text-center md:flex-grow md:truncate md:text-end">
            <small className="font-light text-muted-foreground">
              {matricula.id}
            </small>
          </div>
        </div>

        <div className="mt-4">
          <Tabs defaultValue="atosPessoal" className="w-full">
            <TabsList>
              <TabsTrigger value="atosPessoal">Atos de Pessoal</TabsTrigger>
              <TabsTrigger value="cargo">Cargo</TabsTrigger>
              <TabsTrigger value="salario">Salario</TabsTrigger>
              <TabsTrigger value="lotacao">Lotação</TabsTrigger>
              <TabsTrigger value="historicoFuncional">
                Historico Funcional
              </TabsTrigger>
            </TabsList>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(() => {
                  //
                })}
              >
                <TabsContent value="atosPessoal">
                  <AtosPessoalContent form={form} />
                </TabsContent>
                <TabsContent value="cargo">Cargos.</TabsContent>
                <TabsContent value="salario">Salario.</TabsContent>
                <TabsContent value="lotacao">Lotação.</TabsContent>
                <TabsContent value="historicoFuncional">
                  Historico Funcional.
                </TabsContent>
              </form>
            </Form>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  )
}

const AtosPessoalContent = ({
  form,
}: {
  form: UseFormReturn<MatriculaSchemaProps>
}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <div className="col-span-1 lg:col-span-2">
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Decreto de Nomeação</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormDescription>
                Numero e Ano do decreto de nomeação.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-1">
        <FormField
          control={form.control}
          name={'dataNomeacao'}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data da Nomeação</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd/MM/yyyy')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-1">
        <FormField
          control={form.control}
          name={'dataPosse'}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data da Posse</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd/MM/yyyy')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="col-span-1">
        <FormField
          control={form.control}
          name={'dataAdmissao'}
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Data de Admissão</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'dd/MM/yyyy')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the name that will be displayed on your profile and in
                emails.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}
