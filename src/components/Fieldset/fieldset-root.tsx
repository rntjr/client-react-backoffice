import { InputDecretoNomeacao } from '@/components/input/input-decreto-nomeacao'
import { InputDate } from '@/components/input/input-date'
import { ReactNode } from 'react'

type FieldsetRootProps = {
  label: string
  children: ReactNode
}

export const FieldsetRoot = ({ children, label }: FieldsetRootProps) => {
  return (
    <div className={'flex flex-col'}>
      <span className={'text-xl font-medium'}>{label}</span>
      <hr className={'mb-4 mt-1'} />
      {children}
    </div>
  )
}
