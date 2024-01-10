import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Control } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

type InputTextareaProps = {
  label: string
  name: string
  control: Control<any>
}

export const InputTextarea = ({ control, name, label }: InputTextareaProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
