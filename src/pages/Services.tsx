import { motion } from 'framer-motion'
import Button from '../components/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'

const ServicesPage = () => {
  const scrollToSection = useScrollToSection()
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const services = [
    {
      title: 'Web Development (E-Commerce)',
      description: 'Build secure, mobile-friendly online stores with seamless UX/UI. Our e-commerce solutions are designed to maximize conversions and provide exceptional shopping experiences with integrated payment systems.',
      features: ['Responsive Design', 'Payment Gateway Integration', 'Inventory Management', 'SEO Optimization', 'Analytics Integration'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      )
    },
    {
      title: 'Software Integration',
      description: 'Modernize systems, connect APIs, and unify cloud workflows. We help businesses streamline their operations by integrating disparate systems and creating seamless data flow across platforms.',
      features: ['API Development', 'Third-party Integrations', 'Legacy System Modernization', 'Cloud Migration', 'Workflow Automation'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Stop threats with penetration tests and SOC monitoring. Our comprehensive cybersecurity services protect your digital assets and ensure compliance with industry standards.',
      features: ['Penetration Testing', 'SOC Monitoring', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: 'App Development',
      description: 'Native, PWA, and IoT apps for all platforms. We create powerful mobile and web applications that deliver exceptional user experiences across all devices and operating systems.',
      features: ['Native Mobile Apps', 'Progressive Web Apps', 'IoT Applications', 'Cross-platform Development', 'App Store Optimization'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Networking Solutions',
      description: 'Build secure, mobile-friendly systems with seamless infrastructure. Our networking solutions ensure reliable connectivity and optimal performance for your business operations.',
      features: ['Network Design', 'Infrastructure Setup', 'Security Configuration', 'Performance Optimization', 'Monitoring & Maintenance'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h6a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2v-4a2 2 0 00-2-2m8-2a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2h-2a2 2 0 01-2-2V10z" />
        </svg>
      )
    },
    {
      title: 'UI/UX Design',
      description: 'Create intuitive and engaging user interfaces with modern design principles. Our design process focuses on user research, prototyping, and creating exceptional user experiences.',
      features: ['User Research', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing', 'Design Systems'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
        </svg>
      )
    },
    {
      title: 'Software Quality Assurance',
      description: 'Automated testing, security checks, and CI/CD optimization. Ensure your software meets the highest quality standards through comprehensive testing and quality assurance processes.',
      features: ['Automated Testing', 'Security Audits', 'Performance Testing', 'CI/CD Pipeline Setup', 'Code Quality Reviews'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Software Maintenance',
      description: 'Keep systems running smoothly with ongoing support and updates. Our maintenance services ensure your software remains secure, efficient, and up-to-date with the latest technologies.',
      features: ['Bug Fixes', 'Performance Optimization', 'Security Updates', 'Feature Enhancements', '24/7 Support'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Data Science & Analytics',
      description: 'Extract insights from data with advanced analytics and visualization. Transform your raw data into actionable business intelligence that drives informed decision-making.',
      features: ['Data Mining', 'Statistical Analysis', 'Predictive Modeling', 'Data Visualization', 'Business Intelligence'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Machine Learning & AI',
      description: 'Predictive models, chatbots, and business intelligence tools. Leverage artificial intelligence and machine learning to automate processes and gain competitive advantages.',
      features: ['Predictive Analytics', 'Chatbot Development', 'Natural Language Processing', 'Computer Vision', 'AI Strategy Consulting'],
      icon: (
        <svg className="h-16 w-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 pt-16 lg:pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Service Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 text-primary/30"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6 0V3m2 3H7m10 0v5a2 2 0 01-2 2H9a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2zM7 21h10a2 2 0 002-2v-8a2 2 0 00-2-2H7a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute top-32 right-20 text-blue-400/30"
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-20 text-purple-400/30"
            animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <svg className="w-14 h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto py-6 sm:py-8 lg:py-12 pb-12 sm:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden sm:inline-block px-6 py-3 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6 sm:mb-8"
            >
              <span className="text-primary font-medium text-sm sm:text-base">Our Services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8"
            >
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 w-32 bg-gradient-to-r from-primary to-purple-400 mb-6 sm:mb-8 mx-auto"
            ></motion.div>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-12 leading-relaxed max-w-4xl mx-auto"
            >
              From web development to AI implementation, we provide end-to-end services 
              designed to transform your business and drive unprecedented success.
            </motion.p>

            {/* Service Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto"
            >
              {[
                { number: '7+', label: 'Core Services' },
                { number: '50+', label: 'Projects Delivered' },
                { number: '99%', label: 'Client Satisfaction' },
                { number: '24/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl lg:rounded-2xl p-2 sm:p-4 lg:p-6 border border-white/20 min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] flex flex-col justify-center items-center"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm text-center leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={() => scrollToSection('services-grid')}
                variant="primary" 
                className="px-10 py-4 text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Explore Services
              </Button>
              <Button 
                to="/contact"
                variant="secondary" 
                className="px-10 py-4 text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                Get Quote
              </Button>
            </motion.div>
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
            onClick={() => scrollToSection('services-grid')}
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

      {/* Services Grid */}
      <section id="services-grid" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                        <svg className="h-4 w-4 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button to="/contact" variant="outline" size="sm" className="w-full">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10"
            >
              Let's discuss your project and find the perfect solution for your business needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button 
                to="/contact" 
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!text-primary hover:!border-primary"
              >
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
