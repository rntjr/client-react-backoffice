import { useAbstractBasicRead } from '@/hooks/abstract-basic-read.hook'
import { ItemOption } from '@/components/input/input-select'
import { useEffect } from 'react'

export const useSexo = () => {
  const { itens, handleBuscarTodos } = useAbstractBasicRead<ItemOption, string>(
    '/sexo',
  )

  useEffect(() => {
    ;(async () => {
      await handleBuscarTodos()
    })()
  }, [handleBuscarTodos])

  return { sexoOptions: itens }
}
