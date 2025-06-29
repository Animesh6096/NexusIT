import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../components/Button'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Validation function
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form before submission
    if (!validateForm()) {
      return
    }
    
    // In a real application, you would send this data to your backend
    // Here we're just simulating the API call
    try {
      setFormStatus('submitting')
      setErrors({}) // Clear any previous errors
      
      // Simulate API call with timeout
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      console.log('Form submitted:', formData)
      
      // Reset form and show success message
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
      
      setFormStatus('success')
      
      // Reset status after a few seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
      
      // Reset status after a few seconds
      setTimeout(() => {
        setFormStatus('idle')
      }, 5000)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">Contact Us</h1>
            <div className="h-1 w-16 md:w-24 bg-primary mb-4 md:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-200">
              Get in touch with our team to discuss your project needs or inquire about our services.
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-10 md:py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {[
              {
                title: 'Email Us',
                info: 'nexusit.official@gmail.com',
                description: 'For general inquiries',
                icon: (
                  <svg className="h-8 w-8 md:h-12 md:w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: 'Call Us',
                info: '+880 178 183 6541',
                description: 'Mon-Fri, 9am-5pm PST',
                icon: (
                  <svg className="h-8 w-8 md:h-12 md:w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.210l-2.257 1.130a11.042 11.042 0 005.516 5.516l1.130-2.257a1 1 0 011.210-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                )
              },
              {
                title: 'Visit Us',
                info: '',
                description: 'Merul Badda, Dhaka, Bangladesh',
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
                <p className="text-sm md:text-base text-primary font-medium mb-1">{item.info}</p>
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-10 md:py-16 bg-gray-50 dark:bg-gray-800">
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
              {formStatus === 'success' ? (
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
                  <Button onClick={() => setFormStatus('idle')} variant="secondary">
                    Send Another Message
                  </Button>
                </div>
              ) : formStatus === 'error' ? (
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
                  <Button onClick={() => setFormStatus('idle')} variant="secondary">
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
                        onChange={handleChange}
                        required
                        className={`w-full px-3 py-2 md:px-4 md:py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base ${
                          errors.name 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{errors.name}</p>
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
                        onChange={handleChange}
                        required
                        className={`w-full px-3 py-2 md:px-4 md:py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                            : 'border-gray-300 focus:border-primary'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{errors.email}</p>
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
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Subject*
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 md:px-4 md:py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Consultation">Project Consultation</option>
                      <option value="Partnership Opportunity">Partnership Opportunity</option>
                      <option value="Career Information">Career Information</option>
                      <option value="Support Request">Support Request</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                      Your Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className={`w-full px-3 py-2 md:px-4 md:py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-600 text-sm md:text-base md:rows-5 ${
                        errors.message 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-primary'
                      }`}
                      placeholder="How can we help you? (minimum 10 characters)"
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs md:text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="relative"
                    >
                      {formStatus === 'submitting' ? (
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
                question: 'What services does NexusIT offer?',
                answer: 'NexusIT offers a comprehensive range of software development services including web development (e-commerce), software integration, cybersecurity solutions, app development, networking solutions, UI/UX design, software quality assurance, software maintenance, data science & analytics, and machine learning & AI tailored to your business needs.'
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