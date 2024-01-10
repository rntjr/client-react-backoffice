import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Control } from 'react-hook-form'
import { Switch } from '@/components/ui/switch'

type InputSwitchProps = {
  label: string
  name: string
  control: Control<any>
}

export const InputSwitch = ({ control, name, label }: InputSwitchProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem className="flex flex-col gap-2">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Switch />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
