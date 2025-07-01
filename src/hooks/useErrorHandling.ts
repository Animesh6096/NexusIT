import { useState, useEffect } from 'react'

// Network Status Hook
export const useNetworkStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return isOnline
}

// Generic Error Handler Hook
export const useErrorHandler = () => {
  const [error, setError] = useState<Error | null>(null)

  const resetError = () => setError(null)

  const handleError = (error: Error) => {
    console.error('Application Error:', error)
    setError(error)
  }

  return { error, resetError, handleError }
}
