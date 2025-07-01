import { motion } from 'framer-motion'
import Button from '../components/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'

const AboutPage = () => {
  const scrollToSection = useScrollToSection()
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden pt-16 lg:pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-bounce"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 pt-20 pb-8 sm:py-12 lg:py-16">
            {/* Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden sm:inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/30 mb-6"
              >
                <span className="text-primary font-medium text-sm sm:text-base">About Our Company</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                About{' '}
                <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                  SLYTHOS IT
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 w-24 bg-gradient-to-r from-primary to-blue-400 mb-8 mx-auto lg:mx-0"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Building the future of digital experiences through innovative software solutions. 
                We transform ideas into powerful digital realities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  onClick={() => scrollToSection('our-story')}
                  variant="primary" 
                  className="px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  Our Story
                </Button>
                <Button 
                  to="/team"
                  variant="secondary" 
                  className="px-8 py-3 text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Meet the Team
                </Button>
              </motion.div>
            </div>

            {/* Visual Element */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <motion.div 
                      className="bg-primary/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-white mb-2">50+</div>
                      <div className="text-gray-300 text-sm">Projects Completed</div>
                    </motion.div>
                    <motion.div 
                      className="bg-blue-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-white mb-2">3+</div>
                      <div className="text-gray-300 text-sm">Years Experience</div>
                    </motion.div>
                    <motion.div 
                      className="bg-purple-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-purple-500/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-white mb-2">20+</div>
                      <div className="text-gray-300 text-sm">Happy Clients</div>
                    </motion.div>
                    <motion.div 
                      className="bg-green-500/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-green-500/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div className="text-gray-300 text-sm">Support</div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/30 rounded-full blur-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm mb-2 hidden md:block">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="py-12 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6">Our Story</h2>
              <div className="h-1 w-16 md:w-20 bg-primary mb-4 md:mb-8"></div>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
                SLYTHOS IT began as a small group of tech enthusiasts who wanted to create smart, useful software 
                for everyone. What started as just web development has since expanded into a comprehensive IT 
                services company that partners with businesses worldwide.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6">
                Today, we assist businesses with e-commerce websites, app development, cybersecurity, AI and 
                machine learning, UI/UX design, networking, software testing, data analysis, system integration, 
                and software support. Our solutions have helped startups launch innovative products and 
                established businesses modernize their digital infrastructure.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300">
                Our goal is simple: use modern technology to solve real-world problems. We combine creativity 
                and technical skills to develop solutions that work, grow, and benefit our clients.
              </p>
            </motion.div>
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:w-1/2"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="SLYTHOS IT team in discussion" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6"
            >
              Vision, Mission & Core Values
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-4 md:mb-8 md:w-[100px]"
            ></motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 dark:bg-gray-600 p-2 md:p-3 inline-flex rounded-full mb-3 md:mb-6">
                <svg className="h-6 w-6 md:h-8 md:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-4">Our Vision</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                To be at the forefront of technological innovation, creating software solutions that empower 
                businesses to reach their full potential in the digital era.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 dark:bg-gray-600 p-2 md:p-3 inline-flex rounded-full mb-3 md:mb-6">
                <svg className="h-6 w-6 md:h-8 md:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-4">Our Mission</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                To deliver innovative, high-quality software solutions that solve complex challenges, drive growth, 
                and create meaningful value for our clients and their customers.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-blue-50 dark:bg-gray-600 p-2 md:p-3 inline-flex rounded-full mb-3 md:mb-6">
                <svg className="h-6 w-6 md:h-8 md:w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-4">Our Values</h3>
              <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                Excellence, integrity, innovation, collaboration, and client-centricity guide everything we do at SLYTHOS IT, 
                shaping how we approach our work and build relationships.
              </p>
            </motion.div>
          </div>

          {/* Our Goals Section */}
          <div className="max-w-7xl mx-auto">
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-16 text-gray-800 dark:text-gray-100"
            >
              OUR GOALS
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <div className="space-y-6 md:space-y-12">
                {/* Operational Excellence */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-start space-x-3 md:space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary dark:border-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-blue-300 mb-2 md:mb-4">Operational Excellence</h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                      <li>• Automate 70% of repetitive tasks using AIOps by 2025.</li>
                      <li>• Reduce carbon footprint by 25% via green data center initiatives.</li>
                      <li>• Attain 99.9% uptime for core services.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Talent & Culture */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="flex items-start space-x-3 md:space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary dark:border-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-blue-300 mb-2 md:mb-4">Talent & Culture</h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                      <li>• Upskill 100% of engineers in GenAI and edge computing by 2026.</li>
                      <li>• Double male leadership in tech roles by 2027.</li>
                      <li>• Maintain a 4.8/5 employee satisfaction score through innovation sprints.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Market Expansion */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex items-start space-x-3 md:space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary dark:border-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-blue-300 mb-2 md:mb-4">Market Expansion</h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                      <li>• Enter 3 new verticals (Healthcare, Smart Cities, FinTech) by 2025.</li>
                      <li>• Grow recurring revenue to 60% of total income.</li>
                      <li>• Partner with 5+ global tech giants (AWS, NVIDIA, etc.).</li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 md:space-y-12">
                {/* Technological Leadership */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex items-start space-x-3 md:space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary dark:border-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-blue-300 mb-2 md:mb-4">Technological Leadership</h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                      <li>• Develop 3+ proprietary AI/ML tools for enterprise automation by 2026.</li>
                      <li>• Achieve 100% cloud-native solutions across all products by 2025.</li>
                      <li>• Pioneer a quantum computing R&D lab by 2027.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Client Success */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex items-start space-x-3 md:space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary dark:border-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-blue-300 mb-2 md:mb-4">Client Success</h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                      <li>• Maintain 95%+ client retention through SLA-driven support.</li>
                      <li>• Deliver 30% faster project timelines via agile DevOps pipelines.</li>
                      <li>• Launch a client education portal with 50+ tech certifications by 2025.</li>
                    </ul>
                  </div>
                </motion.div>

                {/* Security & Compliance */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex items-start space-x-3 md:space-x-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-primary dark:border-blue-400 flex items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-primary dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 dark:text-blue-300 mb-2 md:mb-4">Security & Compliance</h4>
                    <ul className="space-y-1 md:space-y-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
                      <li>• Achieve ISO 27001 and SOC 2 compliance for all solutions by 2024.</li>
                      <li>• Reduce critical vulnerabilities by 40% through zero-trust architecture.</li>
                      <li>• Conduct bi-annual security drills for clients and internal teams.</li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6"
            >
              Join Us in Building the Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-10"
            >
              Whether you're looking to work with us or join our team, we'd love to hear from you.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4"
            >
              <Button to="/contact" size="lg">Contact Us</Button>
              <Button to="/careers" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                View Careers
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage