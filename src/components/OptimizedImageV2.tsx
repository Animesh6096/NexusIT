import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  fallbackSrc?: string
  priority?: boolean
  sizes?: string
}

const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  fallbackSrc,
  sizes
}: OptimizedImageProps) => {
  const [hasError, setHasError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(src)

  const handleError = () => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc)
      setHasError(false)
    } else {
      setHasError(true)
    }
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-200 dark:bg-gray-700 ${className}`}>
        <div className="text-center p-4">
          <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm text-gray-500">Image failed to load</p>
        </div>
      </div>
    )
  }

  return (
    <img
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      onError={handleError}
      className={`w-full h-full object-cover ${className}`}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    />
  )
}

export default OptimizedImage
