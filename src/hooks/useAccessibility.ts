import { useEffect } from 'react'

// Focus management for accessibility
export const useFocusManagement = () => {
  useEffect(() => {
    const handleRouteChange = () => {
      // Reset focus to main content on route changes
      const mainContent = document.querySelector('main') as HTMLElement
      if (mainContent) {
        mainContent.focus()
      }
    }

    // Listen for navigation events
    window.addEventListener('popstate', handleRouteChange)
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
    }
  }, [])
}

// Skip to main content utility
export const createSkipToMainHandler = () => {
  return () => {
    const mainContent = document.querySelector('#main-content') as HTMLElement
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView()
    }
  }
}

// Reduced motion preference detection
export const useReducedMotion = () => {
  const prefersReducedMotion = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return prefersReducedMotion
}

// High contrast mode detection
export const useHighContrast = () => {
  const prefersHighContrast = 
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-contrast: high)').matches

  return prefersHighContrast
}

// Announce content changes to screen readers
export const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
  const announcement = document.createElement('div')
  announcement.setAttribute('aria-live', priority)
  announcement.setAttribute('aria-atomic', 'true')
  announcement.className = 'sr-only'
  announcement.textContent = message
  
  document.body.appendChild(announcement)
  
  setTimeout(() => {
    document.body.removeChild(announcement)
  }, 1000)
}

// Custom focus trap hook
export const useFocusTrap = (isActive: boolean) => {
  useEffect(() => {
    if (!isActive) return

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    
    const firstElement = focusableElements[0] as HTMLElement
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    firstElement?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isActive])
}
