import { memo, useMemo } from 'react'

// Memoized component for expensive calculations
export const OptimizedComponent = memo(({ data }: { data: any }) => {
  const processedData = useMemo(() => {
    // Expensive computation here
    return data?.map((item: any) => ({
      ...item,
      processed: true
    })) || []
  }, [data])

  return processedData
})

OptimizedComponent.displayName = 'OptimizedComponent'

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const measurePerformance = (name: string, fn: () => void) => {
    const start = performance.now()
    fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
  }

  return { measurePerformance }
}

// Image optimization utility
export const getOptimizedImageUrl = (url: string, width: number, quality: number = 80) => {
  // If using a CDN like Cloudinary or similar
  if (url.includes('cloudinary')) {
    return url.replace('/upload/', `/upload/w_${width},q_${quality},f_auto/`)
  }
  
  // For local images, return as-is (could be enhanced with image optimization service)
  return url
}
