import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5"></div>
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
      ></motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Main Footer Links */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
            >
              {/* Company Info */}
              <motion.div variants={slideIn} className="col-span-2 lg:col-span-1">
                <Link to="/" className="inline-block mb-3 sm:mb-4 lg:mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
                  >
                    NexusIT
                  </motion.div>
                </Link>
                <p className="text-gray-300 mb-3 sm:mb-4 lg:mb-6 leading-relaxed text-sm sm:text-base">
                  Transforming businesses through innovative software solutions. We bridge the gap between technology and success.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-gray-400">Projects</div>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-1">98%</div>
                    <div className="text-xs text-gray-400">Success Rate</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-3 sm:space-x-4">
                  {[
                    { href: "https://twitter.com", icon: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84", label: "Twitter" },
                    { href: "https://github.com", icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z", label: "GitHub" },
                    { href: "https://linkedin.com", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z", label: "LinkedIn" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary transition-all duration-300"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div variants={slideIn}>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Services</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { name: "Web Development", href: "/services" },
                    { name: "Mobile Apps", href: "/services" },
                    { name: "UI/UX Design", href: "/services" },
                    { name: "Cybersecurity", href: "/services" },
                    { name: "AI & ML", href: "/services" }
                  ].map((service) => (
                    <li key={service.name}>
                      <Link 
                        to={service.href} 
                        className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Quick Links */}
              <motion.div variants={slideIn}>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Quick Links</h3>
                <ul className="space-y-2 sm:space-y-3">
                  {[
                    { name: "About Us", href: "/about" },
                    { name: "Our Team", href: "/team" },
                    { name: "Projects", href: "/projects" },
                    { name: "Careers", href: "/careers" },
                    { name: "Contact", href: "/contact" }
                  ].map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href} 
                        className="text-xs sm:text-sm text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 group-hover:scale-150 transition-transform duration-300"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={slideIn}>
                <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Get in Touch</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">Email</p>
                      <a href="mailto:contact@nexusit.com" className="text-xs sm:text-sm text-white hover:text-primary transition-colors duration-300">
                        contact@nexusit.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">Phone</p>
                      <a href="tel:+1234567890" className="text-xs sm:text-sm text-white hover:text-primary transition-colors duration-300">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">Address</p>
                      <p className="text-xs sm:text-sm text-white">
                        123 Tech Street<br />
                        Innovation City, IC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Stay Connected</h3>
              <p className="text-xs sm:text-sm text-gray-300 mb-4 sm:mb-6">
                Get the latest updates on technology trends and our services
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                />
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary hover:bg-primary/80 text-white rounded-lg font-medium text-sm transition-all duration-300 flex items-center justify-center">
                  <span>Subscribe</span>
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-0"
              >
                © {currentYear} NexusIT. All rights reserved. Crafted with passion for innovation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6"
              >
                <Link to="/privacy" className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors duration-300">
                  Cookie Policy
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
