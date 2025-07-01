import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

export const useSEO = ({
  title = 'SLYTHOS IT - Innovative Software Solutions',
  description = 'Creating innovative software solutions for businesses worldwide. We specialize in web development, e-commerce, UI/UX design, cybersecurity, app development, data science, machine learning & AI, software integration, quality assurance, and software maintenance.',
  keywords = 'software development, web development, e-commerce, UI/UX design, cybersecurity solutions, app development, data science, machine learning, AI, software integration, quality assurance, software maintenance, IT services, Bangladesh, SlythosIT, innovative solutions',
  image = 'https://nexusit.netlify.app/og-image.jpg',
  url,
  type = 'website'
}: SEOProps) => {
  const location = useLocation()
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description)
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords)
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogImage = document.querySelector('meta[property="og:image"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    const ogType = document.querySelector('meta[property="og:type"]')
    
    if (ogTitle) ogTitle.setAttribute('content', title)
    if (ogDescription) ogDescription.setAttribute('content', description)
    if (ogImage) ogImage.setAttribute('content', image)
    if (ogUrl) ogUrl.setAttribute('content', url || `https://nexusit.netlify.app${location.pathname}`)
    if (ogType) ogType.setAttribute('content', type)
    
    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    const twitterImage = document.querySelector('meta[name="twitter:image"]')
    const twitterUrl = document.querySelector('meta[name="twitter:url"]')
    
    if (twitterTitle) twitterTitle.setAttribute('content', title)
    if (twitterDescription) twitterDescription.setAttribute('content', description)
    if (twitterImage) twitterImage.setAttribute('content', image)
    if (twitterUrl) twitterUrl.setAttribute('content', url || `https://nexusit.netlify.app${location.pathname}`)
    
    // Update canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url || `https://nexusit.netlify.app${location.pathname}`)
    }
    
  }, [title, description, keywords, image, url, type, location.pathname])
}

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: 'SLYTHOS IT - Innovative Software Solutions & Web Development',
    description: 'Leading software development company in Bangladesh. We create innovative web applications, e-commerce platforms, mobile apps, and AI-powered solutions for businesses worldwide.',
    keywords: 'software development company, web development Bangladesh, e-commerce development, mobile app development, AI solutions, custom software, SLYTHOS IT'
  },
  about: {
    title: 'About Us - SLYTHOS IT | Expert Software Development Team',
    description: 'Learn about SLYTHOS IT\'s journey, our expert team, and our mission to deliver innovative software solutions. Discover our values, goals, and why businesses choose us.',
    keywords: 'about SLYTHOS IT, software development team, company history, mission vision, expert developers, Bangladesh IT company'
  },
  services: {
    title: 'Our Services - Web Development, E-commerce & More | SLYTHOS IT',
    description: 'Comprehensive software development services including web development, e-commerce solutions, mobile apps, UI/UX design, cybersecurity, AI/ML, and more.',
    keywords: 'web development services, e-commerce development, mobile app development, UI/UX design, cybersecurity services, AI machine learning, software integration'
  },
  projects: {
    title: 'Our Projects - Portfolio & Case Studies | SLYTHOS IT',
    description: 'Explore our portfolio of successful software projects including web applications, e-commerce platforms, mobile apps, and AI solutions across various industries.',
    keywords: 'software projects portfolio, web development case studies, e-commerce projects, mobile app portfolio, AI solutions examples'
  },
  team: {
    title: 'Our Team - Meet the Experts | SLYTHOS IT',
    description: 'Meet our talented team of software developers, designers, and technology experts who create innovative solutions for businesses worldwide.',
    keywords: 'software development team, expert developers, UI/UX designers, technology experts, SLYTHOS IT team members'
  },
  careers: {
    title: 'Careers - Join Our Team | SLYTHOS IT',
    description: 'Join SLYTHOS IT and build your career in software development. Explore exciting opportunities with our growing team of technology professionals.',
    keywords: 'software developer jobs, careers in technology, Bangladesh IT jobs, web developer positions, mobile app developer careers'
  },
  contact: {
    title: 'Contact Us - Get in Touch | SLYTHOS IT',
    description: 'Contact SLYTHOS IT for your software development needs. Get a free consultation and discover how we can help your business grow with innovative solutions.',
    keywords: 'contact software development company, free consultation, project quote, SLYTHOS IT contact, Bangladesh IT services'
  }
}

export default useSEO
