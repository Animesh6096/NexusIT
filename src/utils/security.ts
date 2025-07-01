// Security utilities and configurations

// Content Security Policy configuration
export const CSP_CONFIG = {
  "default-src": ["'self'"],
  "script-src": [
    "'self'",
    "'unsafe-inline'", // Required for Vite in development
    "https://fonts.googleapis.com",
    "https://cdn.jsdelivr.net"
  ],
  "style-src": [
    "'self'",
    "'unsafe-inline'", // Required for CSS-in-JS
    "https://fonts.googleapis.com"
  ],
  "font-src": [
    "'self'",
    "https://fonts.gstatic.com"
  ],
  "img-src": [
    "'self'",
    "data:",
    "https:",
    "https://images.unsplash.com",
    "https://scontent.fdac189-1.fna.fbcdn.net",
    "https://scontent-sin11-2.xx.fbcdn.net",
    "https://scontent-sin6-3.xx.fbcdn.net",
    "https://media.licdn.com"
  ],
  "connect-src": [
    "'self'",
    "https://api.github.com",
    "https://fonts.googleapis.com",
    "https://fonts.gstatic.com"
  ],
  "frame-src": ["'none'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"]
}

// Input sanitization
export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>"/\\&]/g, (match) => {
      const escapeMap: { [key: string]: string } = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '/': '&#x2F;',
        '\\': '&#x5C;',
        '&': '&amp;'
      }
      return escapeMap[match] || match
    })
    .trim()
}

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

// Phone validation
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\+?[\d\s\-\(\)]{7,15}$/
  return phoneRegex.test(phone)
}

// Rate limiting for form submissions
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map()
  private readonly maxAttempts: number
  private readonly windowMs: number

  constructor(maxAttempts: number = 3, windowMs: number = 15 * 60 * 1000) {
    this.maxAttempts = maxAttempts
    this.windowMs = windowMs
  }

  isAllowed(identifier: string): boolean {
    const now = Date.now()
    const attempts = this.attempts.get(identifier) || []
    
    // Remove old attempts outside the time window
    const validAttempts = attempts.filter(time => now - time < this.windowMs)
    
    if (validAttempts.length >= this.maxAttempts) {
      return false
    }

    // Add current attempt
    validAttempts.push(now)
    this.attempts.set(identifier, validAttempts)
    
    return true
  }

  getRemainingTime(identifier: string): number {
    const attempts = this.attempts.get(identifier) || []
    if (attempts.length < this.maxAttempts) return 0
    
    const oldestAttempt = Math.min(...attempts)
    const resetTime = oldestAttempt + this.windowMs
    return Math.max(0, resetTime - Date.now())
  }
}

// Secure session storage
export const secureStorage = {
  set: (key: string, value: any): void => {
    try {
      const encrypted = btoa(JSON.stringify(value))
      sessionStorage.setItem(key, encrypted)
    } catch (error) {
      console.error('Failed to store data securely:', error)
    }
  },

  get: (key: string): any => {
    try {
      const item = sessionStorage.getItem(key)
      if (!item) return null
      return JSON.parse(atob(item))
    } catch (error) {
      console.error('Failed to retrieve data securely:', error)
      return null
    }
  },

  remove: (key: string): void => {
    sessionStorage.removeItem(key)
  },

  clear: (): void => {
    sessionStorage.clear()
  }
}

// CSRF protection token generator
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// Security headers for API requests
export const getSecurityHeaders = (): HeadersInit => {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()'
  }
}

// Content validation for user inputs
export const validateContent = {
  name: (name: string): { isValid: boolean; error?: string } => {
    if (!name || name.trim().length === 0) {
      return { isValid: false, error: 'Name is required' }
    }
    if (name.length > 100) {
      return { isValid: false, error: 'Name must be less than 100 characters' }
    }
    if (!/^[a-zA-Z\s\-'\.]+$/.test(name)) {
      return { isValid: false, error: 'Name contains invalid characters' }
    }
    return { isValid: true }
  },

  message: (message: string): { isValid: boolean; error?: string } => {
    if (!message || message.trim().length === 0) {
      return { isValid: false, error: 'Message is required' }
    }
    if (message.length > 2000) {
      return { isValid: false, error: 'Message must be less than 2000 characters' }
    }
    // Check for potential malicious content
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /<object/i,
      /<embed/i
    ]
    
    if (suspiciousPatterns.some(pattern => pattern.test(message))) {
      return { isValid: false, error: 'Message contains potentially harmful content' }
    }
    
    return { isValid: true }
  }
}

export default {
  CSP_CONFIG,
  sanitizeInput,
  validateEmail,
  validatePhone,
  RateLimiter,
  secureStorage,
  generateCSRFToken,
  getSecurityHeaders,
  validateContent
}
