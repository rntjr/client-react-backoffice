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

type InputSelectProps = {
  label: string
  name: string
  control: Control<any>
}

export const InputSimNao = ({ control, name, label }: InputSelectProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field: { onChange, value } }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <Select onValueChange={onChange} defaultValue={value}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="true">Sim</SelectItem>
            <SelectItem value="false">Não</SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
)
