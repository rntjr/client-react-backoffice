import { FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

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
      <Button
        variant={'outline'}
        size={'sm'}
        className={'w-full justify-start pl-3 font-normal shadow-sm'}
      >
        <span>{value}</span>
      </Button>
    </div>
  </div>
)
