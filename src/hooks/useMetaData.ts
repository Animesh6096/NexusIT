import { useEffect } from 'react'

interface MetaData {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonical?: string
  robots?: string
}

const defaultMeta: MetaData = {
  title: 'SlythosIT - Innovative Software Solutions',
  description: 'Creating innovative software solutions for businesses worldwide. We specialize in web development, e-commerce, UI/UX design, cybersecurity, app development, data science, machine learning & AI, software integration, quality assurance, and software maintenance.',
  keywords: 'software development, web development, e-commerce, UI/UX design, cybersecurity solutions, app development, data science, machine learning, AI, software integration, quality assurance, software maintenance, IT services, Bangladesh',
  ogTitle: 'SlythosIT - Innovative Software Solutions',
  ogDescription: 'Creating innovative software solutions for businesses worldwide. We specialize in web development, e-commerce, UI/UX design, cybersecurity, app development, data science, machine learning & AI, software integration, quality assurance, and software maintenance.',
  ogImage: 'https://nexusit.netlify.app/og-image.jpg',
  ogUrl: 'https://nexusit.netlify.app',
  twitterTitle: 'SlythosIT - Innovative Software Solutions',
  twitterDescription: 'Creating innovative software solutions for businesses worldwide. We specialize in web development, e-commerce, UI/UX design, cybersecurity, app development, data science, machine learning & AI, software integration, quality assurance, and software maintenance.',
  twitterImage: 'https://nexusit.netlify.app/og-image.jpg',
  canonical: 'https://nexusit.netlify.app',
  robots: 'index, follow'
}

export const useMetaData = (meta: Partial<MetaData> = {}) => {
  useEffect(() => {
    const finalMeta = { ...defaultMeta, ...meta }
    
    // Update title
    if (finalMeta.title) {
      document.title = finalMeta.title
    }
    
    // Helper function to update meta tags
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement
      if (!element) {
        element = document.createElement('meta')
        if (selector.includes('property')) {
          element.setAttribute('property', selector.split('property="')[1].split('"')[0])
        } else if (selector.includes('name')) {
          element.setAttribute('name', selector.split('name="')[1].split('"')[0])
        }
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }
    
    // Update meta tags
    if (finalMeta.description) {
      updateMetaTag('meta[name="description"]', finalMeta.description)
    }
    
    if (finalMeta.keywords) {
      updateMetaTag('meta[name="keywords"]', finalMeta.keywords)
    }
    
    if (finalMeta.robots) {
      updateMetaTag('meta[name="robots"]', finalMeta.robots)
    }
    
    // Open Graph tags
    if (finalMeta.ogTitle) {
      updateMetaTag('meta[property="og:title"]', finalMeta.ogTitle)
    }
    
    if (finalMeta.ogDescription) {
      updateMetaTag('meta[property="og:description"]', finalMeta.ogDescription)
    }
    
    if (finalMeta.ogImage) {
      updateMetaTag('meta[property="og:image"]', finalMeta.ogImage)
    }
    
    if (finalMeta.ogUrl) {
      updateMetaTag('meta[property="og:url"]', finalMeta.ogUrl)
    }
    
    // Twitter tags
    if (finalMeta.twitterTitle) {
      updateMetaTag('meta[name="twitter:title"]', finalMeta.twitterTitle)
    }
    
    if (finalMeta.twitterDescription) {
      updateMetaTag('meta[name="twitter:description"]', finalMeta.twitterDescription)
    }
    
    if (finalMeta.twitterImage) {
      updateMetaTag('meta[name="twitter:image"]', finalMeta.twitterImage)
    }
    
    // Canonical URL
    if (finalMeta.canonical) {
      let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.appendChild(canonical)
      }
      canonical.href = finalMeta.canonical
    }
  }, [meta])
}

export default useMetaData
