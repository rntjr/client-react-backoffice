import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'

type InputDateProps = {
  control: Control<any>
  label: string
  name: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
}

export const InputText = ({
  control,
  disabled,
  name,
  label,
  placeholder,
  readOnly,
}: InputDateProps) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem className="flex flex-col">
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input
            placeholder={placeholder}
            {...field}
            disabled={disabled}
            readOnly={readOnly}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
)
