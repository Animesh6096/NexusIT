import { motion } from 'framer-motion'
import Button from '../components/Button'

const ServicesPage = () => {
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
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core Services</h1>
            <div className="h-1 w-24 bg-primary mb-8"></div>
            <p className="text-xl text-gray-200">
              Comprehensive digital solutions designed to transform your business and drive success. 
              From web development to AI implementation, we provide end-to-end services that deliver results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
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
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-10"
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
