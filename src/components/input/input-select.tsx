import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Control } from 'react-hook-form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export type ItemOption = {
  id: string
  descricao: string
}

type InputSelectProps = {
  label: string
  name: string
  control: Control<any>
  itens?: ItemOption[]
}

export const InputSelect = ({
  control,
  name,
  label,
  itens,
}: InputSelectProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {itens &&
              itens.map((item, index) => (
                <SelectItem key={index} value={item.id}>
                  {item.descricao}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
)
