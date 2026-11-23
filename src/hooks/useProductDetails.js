
import { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchProduct } from '../api/products'

export default function useProductDetails(productId) {
  const [state, setState] = useState({
    status: 'idle',
    data: null,
    error: null,
  })

  useEffect(() => {
    if (!productId) {
      setState({
        status: 'idle',
        data: null,
        error: null,
      })
      return
    }

    const controller = new AbortController()

    setState({
      status: 'loading',
      data: null,
      error: null,
    })

    fetchProduct(productId, controller.signal)
      .then((data) => {
        setState({
          status: 'success',
          data,
          error: null,
        })
      })
      .catch((error) => {
        if (axios.isCancel(error)) return

        setState({
          status: 'error',
          data: null,
          error,
        })
      })

    return () => controller.abort()
  }, [productId])

  return state
}
