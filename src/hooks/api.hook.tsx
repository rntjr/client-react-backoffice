import { useCallback, useState } from 'react'

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface UseApi {
  loading: boolean
  error: string | null
  get: (endpoint: string) => Promise<any>
  post: (endpoint: string, body: any) => Promise<any>
  put: (endpoint: string, body: any) => Promise<any>
  del: (endpoint: string) => Promise<any>
}

const useApi = (baseURL: string, token: string): UseApi => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const request = useCallback(
    async (endpoint: string, method = 'GET', body: any = null) => {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(`${baseURL}${endpoint}`, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: body ? JSON.stringify(body) : null,
        })

        const data = await response.json()

        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong')
        }

        return data
      } catch (err: any) {
        setError(err.message)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [baseURL, token],
  )

  const get = useCallback(
    (endpoint: string) => request(endpoint, 'GET'),
    [request],
  )
  const post = useCallback(
    (endpoint: string, body: any) => request(endpoint, 'POST', body),
    [request],
  )
  const put = useCallback(
    (endpoint: string, body: any) => request(endpoint, 'PUT', body),
    [request],
  )
  const del = useCallback(
    (endpoint: string) => request(endpoint, 'DELETE'),
    [request],
  )

  return { loading, error, get, post, put, del }
}

export default useApi
