import { Control, Controller } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

type InputNumeroAnoProps = {
  control: Control<any>
  label: string
  nameInput1: string
  nameInput2: string
}

export const InputNumeroAno = ({
  control,
  nameInput1,
  nameInput2,
  label,
}: InputNumeroAnoProps) => (
  <div className="flex max-w-[240px] flex-col gap-2">
    <Label>{label}</Label>
    <div className="flex flex-row">
      <Controller
        name={nameInput1}
        control={control}
        render={({ field }) => (
          <Input
            placeholder={'Número'}
            {...field}
            className="w-full rounded-r-none border-r-0"
          />
        )}
      />
      <span className="flex h-9 items-center border border-input bg-transparent px-4 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
        /
      </span>
      <Controller
        name={nameInput2}
        control={control}
        render={({ field }) => (
          <Input
            placeholder={'Ano'}
            {...field}
            className="max-w-[80px] rounded-l-none border-l-0"
          />
        )}
      />
    </div>
  </div>
)
