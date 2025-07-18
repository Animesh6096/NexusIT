import { motion } from 'framer-motion'
import Button from '../components/Button'
import CodingWindow from '../components/CodingWindow'
import WebAnimation from '../components/WebAnimation'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useSEO, seoConfigs } from '../hooks/useSEO'
import { useRef } from 'react'

const Home = () => {
  // Apply SEO configuration for homepage
  useSEO(seoConfigs.home)
  
  const heroRef = useRef<HTMLDivElement>(null);

  // Fade effect for services
  const [servicesRef, servicesOpacity] = useScrollAnimation({
    offset: [-0.5, 0.5],
    outputRange: [0, 1]
  });

  // Scale effect for CTA
  const [ctaRef, ctaScale] = useScrollAnimation({
    offset: [-0.3, 0.3],
    outputRange: [0.95, 1]
  });

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 pt-16 lg:pt-20">
        {/* WebAnimation cursor effect */}
        <WebAnimation />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Primary animated blob */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-10 -right-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-blue-500/30 rounded-full blur-3xl"
          />
          
          {/* Secondary animated blob */}
          <motion.div
            animate={{
              scale: [1.2, 0.8, 1.2],
              rotate: [360, 180, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5
            }}
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          />

          {/* Floating particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        </div>

        <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <div className="w-full lg:w-3/5 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                Next-Gen Development Studio
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Building the
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent"
                >
                  Digital Future
                </motion.span>
                One Code at a Time
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl"
              >
                We craft exceptional digital experiences that transform businesses and connect people. 
                From concept to deployment, we turn your vision into powerful software solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start"
              >
                <Button 
                  to="/contact" 
                  size="lg"
                  className="group relative overflow-hidden bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Start Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
                
                <Button 
                  to="/projects" 
                  variant="outline" 
                  size="lg" 
                  className="group !border-white/30 !text-white hover:!bg-white/10 hover:!border-white backdrop-blur-sm"
                >
                  Explore Our Work
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap gap-8 justify-center lg:justify-start"
              >
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">5+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support Available</div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Coding Window */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full lg:w-2/5"
            >
              <CodingWindow />
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
          <motion.a 
            href="#about" 
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
          </motion.a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Innovating Since 2015
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight"
                >
                  Transforming Ideas Into
                  <span className="text-primary block">Digital Excellence</span>
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="h-1 w-24 bg-gradient-to-r from-primary to-blue-600 mb-8 origin-left"
                ></motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                SLYTHOS IT is a forward-thinking software company dedicated to crafting innovative digital solutions 
                for businesses of all sizes. We specialize in bridging the gap between complex technology and 
                business needs, delivering software that creates new opportunities for growth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 gap-3 sm:gap-6"
              >
                <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">5+</div>
                  <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">10+</div>
                  <div className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium">Team Members</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button to="/about" variant="secondary" className="shadow-lg hover:shadow-xl transition-shadow">
                  Learn More About Us
                </Button>
                <Button to="/contact" variant="outline" className="group !border-primary !text-primary hover:!bg-primary hover:!text-white">
                  <span>Get In Touch</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Floating Cards - Hidden on mobile, visible on lg+ */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="hidden lg:block absolute -top-5 -right-9 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 z-20"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Active Projects</span>
                  </div>
                  <div className="text-xl font-bold text-primary mt-1">15+</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="hidden lg:block absolute -bottom-5 -left-9 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 z-20"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Client Satisfaction</span>
                  </div>
                  <div className="text-xl font-bold text-primary mt-1">98%</div>
                </motion.div>

                {/* Main Visual - Responsive */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-2xl p-4 sm:p-6 lg:p-8 mx-2 sm:mx-4 lg:mx-8"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    {[
                      { icon: "💻", label: "Development" },
                      { icon: "🎨", label: "Design" },
                      { icon: "🔒", label: "Security" },
                      { icon: "📱", label: "Mobile" },
                      { icon: "🤖", label: "AI/ML" },
                      { icon: "📊", label: "Analytics" }
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-md text-center"
                      >
                        <div className="text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">{item.icon}</div>
                        <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{item.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Mobile Stats Cards - Visible only on mobile */}
                <div className="lg:hidden mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">Active Projects</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-primary">15+</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-gray-100">Satisfaction</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-primary">98%</div>
                  </motion.div>
                </div>

                {/* Background Elements */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-primary/10 rounded-full blur-xl"
                ></motion.div>
                <motion.div
                  animate={{ 
                    rotate: -360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section 
        ref={servicesRef}
        className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden relative"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5 dark:from-primary/10 dark:to-blue-600/10"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"
        ></motion.div>

        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          style={{ opacity: servicesOpacity }}
        >
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-6 border border-primary/20"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h6m-6 4h6m-2 4h2M9 15h2" />
              </svg>
              What We Offer
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6 leading-tight"
            >
              Comprehensive Digital
              <span className="text-primary block">Solutions & Services</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-1 w-32 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8 origin-center"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              From concept to deployment, we deliver end-to-end technology solutions 
              that drive innovation and accelerate your business growth.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                title: 'Web Development',
                subtitle: 'E-Commerce Solutions',
                description: 'Build secure, mobile-friendly online stores with seamless UX/UI and integrated payment systems.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                ),
                features: ['Payment Gateway', 'Mobile Responsive', 'SEO Optimized']
              },
              {
                title: 'Software Integration',
                subtitle: 'API & Cloud Solutions',
                description: 'Modernize systems, connect APIs, and unify cloud workflows for seamless operations.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                features: ['API Development', 'Cloud Migration', 'System Integration']
              },
              {
                title: 'Cybersecurity',
                subtitle: 'Advanced Protection',
                description: 'Stop threats with penetration tests, SOC monitoring, and comprehensive security audits.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                features: ['Penetration Testing', 'SOC Monitoring', 'Security Audits']
              },
              {
                title: 'App Development',
                subtitle: 'Cross-Platform Apps',
                description: 'Native, PWA, and IoT apps for all platforms with exceptional user experiences.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                features: ['Native Apps', 'PWA Development', 'IoT Applications']
              },
              {
                title: 'UI/UX Design',
                subtitle: 'User-Centered Design',
                description: 'Create intuitive and engaging interfaces with modern design principles and user research.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z" />
                  </svg>
                ),
                features: ['User Research', 'Prototyping', 'Design Systems']
              },
              {
                title: 'AI & Machine Learning',
                subtitle: 'Intelligent Solutions',
                description: 'Predictive models, chatbots, and business intelligence tools powered by cutting-edge AI.',
                icon: (
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                features: ['Machine Learning', 'AI Chatbots', 'Predictive Analytics']
              }
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                {/* Icon Background */}
                <div className="relative p-4 sm:p-6 lg:p-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl bg-primary flex items-center justify-center mb-3 sm:mb-4 lg:mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-primary/80">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                          className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="pt-2 sm:pt-3 lg:pt-4">
                      <Button 
                        to="/services" 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-xs sm:text-sm group-hover:!border-primary group-hover:!text-primary transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Need a custom solution? We're here to help.
            </p>
            <Button 
              to="/services" 
              size="lg" 
              className="shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>View All Services</span>
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-20 bg-primary overflow-hidden"
      >
        <motion.div 
          className="container mx-auto px-4 sm:px-6 lg:px-8"
          style={{ scale: ctaScale }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring" }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base lg:text-xl text-white/90 mb-6 sm:mb-8 lg:mb-10"
            >
              Let's collaborate to build the digital solutions your business needs to thrive.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button 
                to="/contact" 
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!text-primary hover:!border-primary"
              >
                Get Started Today
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default Home