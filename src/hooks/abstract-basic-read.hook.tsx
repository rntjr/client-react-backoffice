import { useState } from 'react'

export function useAbstractBasicRead<Type, Id>(endpoint: string) {
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}` + endpoint
  const [itens, setItens] = useState<Type[]>([])
  const [item, setItem] = useState<Type | null | undefined>(null)

  const buscarTodos = async () => {
    const response = await fetch(baseUrl, {}).then((res) => res.json())
    setItens(response)
  }

  const buscarPorId = async (id?: Id) => {
    const response = await fetch(`${baseUrl}/${id}`).then((res) => res.json())
    setItem(response)
  }

  return {
    itens,
    item,
    handleBuscarTodos: buscarTodos,
    handleBuscarPorId: buscarPorId,
  }
}
