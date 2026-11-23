
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchProducts } from '../api/products'

export default function useProducts({ limit = 12, skip = 0 }) {
  const [state, setState] = useState({
    status: 'loading',
    data: null,
    error: null,
  })

  useEffect(() => {
    const controller = new AbortController()

    setState((current) => ({
      ...current,
      status: 'loading',
      error: null,
    }))

    fetchProducts({ limit, skip, signal: controller.signal })
      .then((data) => {
        setState({
          status: 'success',
          data,
          error: null,
        })
      })
      .catch((error) => {
        if (axios.isCancel(error)) return

        setState((current) => ({
          ...current,
          status: 'error',
          error,
        }))
      })

    return () => controller.abort()
  }, [limit, skip])

  return state
}
