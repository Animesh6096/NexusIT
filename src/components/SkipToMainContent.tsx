import React from 'react'
import { createSkipToMainHandler } from '../hooks/useAccessibility'

const SkipToMainContent: React.FC = () => {
  const skipToMain = createSkipToMainHandler()

  return (
    <button
      onClick={skipToMain}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-primary text-white px-4 py-2 rounded-md font-medium shadow-lg"
      aria-label="Skip to main content"
    >
      Skip to main content
    </button>
  )
}

export default SkipToMainContent
