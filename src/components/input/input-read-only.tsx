import { FormLabel } from '@/components/ui/form'

type InputReadOnlyProps = {
  label: string
  value: string
}

export const InputReadOnly = ({ label, value }: InputReadOnlyProps) => (
  <div className={'flex flex-col gap-2'}>
    <FormLabel>{label}</FormLabel>
    <div
      className={
        'inline-flex h-9 items-center rounded-md ring-offset-background transition-colors'
      }
    >
      <span className={'text-sm'}>{value}</span>
    </div>
  </div>
)
