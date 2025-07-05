import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import { validateContent, validateEmail, validatePhone, sanitizeInput } from '../utils/security'

const ContactPage = () => {
  // Apply SEO configuration for contact page
  useSEO(seoConfigs.contact)
  
  const scrollToSection = useScrollToSection()
  
  // Enhanced form state with validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const errors: {[key: string]: string} = {}
    
    // Validate name
    const nameValidation = validateContent.name(formData.name)
    if (!nameValidation.isValid) {
      errors.name = nameValidation.error || 'Invalid name'
    }
    
    // Validate email
    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    
    // Validate phone (optional)
    if (formData.phone && !validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number'
    }
    
    // Validate message
    const messageValidation = validateContent.message(formData.message)
    if (!messageValidation.isValid) {
      errors.message = messageValidation.error || 'Invalid message'
    }
    
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        message: sanitizeInput(formData.message)
      }
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', sanitizedData)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setFormErrors({})
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-teal-900 to-blue-900 pt-16 lg:pt-20">
        {/* Communication Network Visualization */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0">
            {/* Network nodes and connections */}
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              {/* Connection lines */}
              {[...Array(10)].map((_, i) => (
                <motion.line
                  key={i}
                  x1={200 + i * 100}
                  y1={200 + Math.sin(i) * 100}
                  x2={300 + i * 100}
                  y2={300 + Math.cos(i) * 100}
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-primary/40"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: i * 0.2, repeat: Infinity, repeatType: "reverse" }}
                />
              ))}
              {/* Network nodes */}
              {[...Array(12)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={150 + (i % 4) * 250}
                  cy={150 + Math.floor(i / 4) * 200}
                  r="6"
                  fill="currentColor"
                  className="text-teal-400/60"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </svg>
          </div>
        </div>

        {/* Floating Contact Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { Icon: '📧', delay: 0, pos: { x: 10, y: 20 } },
            { Icon: '📱', delay: 0.5, pos: { x: 85, y: 30 } },
            { Icon: '🌐', delay: 1, pos: { x: 15, y: 70 } },
            { Icon: '💬', delay: 1.5, pos: { x: 80, y: 60 } },
            { Icon: '📍', delay: 2, pos: { x: 50, y: 15 } },
            { Icon: '🤝', delay: 2.5, pos: { x: 45, y: 85 } }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-3xl opacity-30"
              style={{
                left: `${item.pos.x}%`,
                top: `${item.pos.y}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: item.delay,
              }}
            >
              {item.Icon}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-8 sm:py-12 lg:py-16 pb-16 sm:pb-20">
            {/* Content */}
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden sm:inline-block px-6 py-3 bg-teal-500/20 backdrop-blur-sm rounded-full border border-teal-500/30 mb-8"
              >
                <span className="text-teal-400 font-medium text-sm sm:text-base">Let's Connect</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
              >
                Get In{' '}
                <span className="bg-gradient-to-r from-primary via-teal-400 to-blue-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 w-32 bg-gradient-to-r from-primary to-teal-400 mb-8 mx-auto lg:mx-0"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl sm:text-2xl text-gray-200 mb-8 leading-relaxed"
              >
                Ready to discuss your project? We'd love to hear from you. 
                Let's turn your ideas into reality together.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              >
                <Button 
                  onClick={() => scrollToSection('contact-form')}
                  variant="primary" 
                  className="px-10 py-4 text-lg hover:scale-105 transition-transform duration-300"
                >
                  Start Conversation
                </Button>
                <Button 
                  to="/services"
                  variant="secondary" 
                  className="px-10 py-4 text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Our Services
                </Button>
              </motion.div>

              {/* Contact Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0"
              >
                {[
                  { label: 'Email Us', value: 'slythosit.official@gmail.com', icon: '📧' },
                  { label: 'Quick Response', value: '< 24 hours', icon: '⚡' },
                  { label: 'Available', value: '24/7 Support', icon: '🌟' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white text-sm font-medium mb-1">{item.label}</div>
                    <div className="text-gray-400 text-xs break-words overflow-hidden">{item.value}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Contact Form Preview */}
            <div className="hidden sm:block lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">Quick Contact</h3>
                      <div className="h-1 w-16 bg-primary mx-auto"></div>
                    </div>
                    
                    {/* Form Preview */}
                    <div className="space-y-4">
                      <motion.div 
                        className="bg-white/5 rounded-lg p-3 border border-white/10"
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="h-2 bg-gray-600 rounded mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-3/4"></div>
                      </motion.div>
                      <motion.div 
                        className="bg-white/5 rounded-lg p-3 border border-white/10"
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="h-2 bg-gray-600 rounded mb-2"></div>
                        <div className="h-2 bg-gray-700 rounded w-1/2"></div>
                      </motion.div>
                      <motion.div 
                        className="bg-white/5 rounded-lg p-3 border border-white/10 h-20"
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="h-2 bg-gray-600 rounded mb-2"></div>
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-700 rounded"></div>
                          <div className="h-1 bg-gray-700 rounded w-4/5"></div>
                          <div className="h-1 bg-gray-700 rounded w-2/3"></div>
                        </div>
                      </motion.div>
                      <motion.button
                        className="w-full bg-gradient-to-r from-primary to-teal-500 rounded-lg py-3 text-white font-medium"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>

                    {/* Response Time Indicator */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span>Typically responds within 24 hours</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-4 sm:bottom-8 left-0 right-0 z-30 flex justify-center"
        >
          <motion.button 
            onClick={() => scrollToSection('contact-info')}
            className="flex flex-col items-center justify-center text-white/80 hover:text-white transition-colors group"
            aria-label="Scroll down"
            whileHover={{ y: -2 }}
          >
            <span className="text-xs sm:text-sm mb-2 sm:mb-3 font-medium text-center whitespace-nowrap">Discover More</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center items-start mx-auto"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 sm:h-2 bg-white rounded-full mt-1.5 sm:mt-2"
              />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>

      {/* Contact Information Section */}
      <section id="contact-info" className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'Email Us',
                info: 'slythosit.official@gmail.com',
                description: 'For general inquiries',
                icon: (
                  <svg className="h-8 w-8 md:h-12 md:w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Call Us',
                info: '+880 (164) 379-2804',
                description: 'Mon-Fri, 9am-6pm BST',
                icon: (
                  <svg className="h-8 w-8 md:h-12 md:w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.210l-2.257 1.130a11.042 11.042 0 005.516 5.516l1.130-2.257a1 1 0 011.210-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: 'Visit Us',
                info: 'Gulshan 1, Dhaka',
                description: 'Bangladesh',
                icon: (
                  <svg className="h-8 w-8 md:h-12 md:w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mx-auto flex items-center justify-center mb-3 md:mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 md:mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-primary font-medium mb-1 break-words overflow-hidden">{item.info}</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-10 md:py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-6 md:mb-10"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">Send Us a Message</h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 md:p-8"
            >
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                      <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Thank You!</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    Your message has been received. We'll get back to you shortly.
                  </p>
                  <Button onClick={() => setSubmitStatus('idle')} variant="secondary">
                    Send Another Message
                  </Button>
                </div>
              ) : submitStatus === 'error' ? (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-red-100 flex items-center justify-center">
                      <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 md:mb-2">Something Went Wrong</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                    There was an error sending your message. Please try again.
                  </p>
                  <Button onClick={() => setSubmitStatus('idle')} variant="secondary">
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        required
                        className={`w-full px-3 py-2 md:px-4 md:py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base ${
                          formErrors.name 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="Your name"
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        required
                        className={`w-full px-3 py-2 md:px-4 md:py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base ${
                          formErrors.email 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && (
                        <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={e => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      rows={4}
                      required
                      className={`w-full px-3 py-2 md:px-4 md:py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base md:rows-5 ${
                        formErrors.message 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder="How can we help you? (minimum 10 characters)"
                    ></textarea>
                    {formErrors.message && (
                      <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{formErrors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="opacity-0">Send Message</span>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                          </div>
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-lg overflow-hidden shadow-lg h-64 md:h-96"
          >
            {/* In a real implementation, this would be a Google Maps iframe or component */}
            {/* For this example, we'll just use a placeholder image */}
            <div 
              className="w-full h-full"
              style={{ 
                backgroundImage: 'url(https://miro.medium.com/max/1400/1*qYUvh-EtES8dtgKiBRiLsA.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3 md:mb-4">Frequently Asked Questions</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have questions? We've got answers. If you can't find what you're looking for, 
              don't hesitate to reach out to us directly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: 'What services does SLYTHOS IT offer?',
                answer: 'SLYTHOS IT offers a comprehensive range of software development services including web development (e-commerce), software integration, cybersecurity solutions, app development, networking solutions, UI/UX design, software quality assurance, software maintenance, data science & analytics, and machine learning & AI tailored to your business needs.'
              },
              {
                question: 'How long does a typical project take to complete?',
                answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while complex applications can take several months. We will provide you with a detailed timeline during the consultation phase."
              },
              {
                question: 'What is your pricing model?',
                answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer arrangements. The best model for your project depends on its scope, complexity, and requirements. Contact us for a personalized quote.'
              },
              {
                question: 'Do you provide maintenance and support after launch?',
                answer: 'Yes, we offer ongoing maintenance and support services to ensure your product remains secure, up-to-date, and performs optimally. We have various support packages available to suit different needs and budgets.'
              },
              {
                question: 'Can you work with my existing team?',
                answer: 'Absolutely! We are experienced in collaborating with in-house teams and can provide the specific expertise or additional capacity you need. Our team integrates seamlessly with your existing workflows and processes.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4 md:mb-6 bg-white dark:bg-gray-700 rounded-lg shadow-md p-4 md:p-6"
              >
                <h3 className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">{item.question}</h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage