import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'

// Project data
const projectsData = [
  {
    id: 1,
    title: 'FinSecure Banking Platform',
    category: 'Web Development',
    tags: ['React', 'Node.js', 'FinTech'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'A secure, modern banking platform with advanced fraud detection and seamless user experience.',
    client: 'FinSecure Inc.',
    year: '2023',
    link: '#'
  },
  {
    id: 2,
    title: 'MediTrack Health App',
    category: 'Mobile App',
    tags: ['React Native', 'Firebase', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Mobile application helping patients track medications, appointments, and health metrics.',
    client: 'MediCare Solutions',
    year: '2022',
    link: '#'
  },
  {
    id: 3,
    title: 'EcoMarket E-commerce Platform',
    category: 'Web Development',
    tags: ['Next.js', 'MongoDB', 'E-commerce'],
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Sustainable products marketplace with carbon footprint tracking and eco-friendly shipping options.',
    client: 'EcoMarket Global',
    year: '2022',
    link: '#'
  },
  {
    id: 4,
    title: 'LearnQuest Educational Platform',
    category: 'SaaS',
    tags: ['Vue.js', 'Python', 'EdTech'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    description: 'Interactive learning platform with personalized curriculum and real-time progress tracking.',
    client: 'LearnQuest Education',
    year: '2023',
    link: '#'
  },
  {
    id: 5,
    title: 'TravelBuddy Mobile App',
    category: 'Mobile App',
    tags: ['Flutter', 'Google Maps API', 'Travel'],
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Travel companion app with AI-powered itinerary planning and local experiences discovery.',
    client: 'TravelTech Solutions',
    year: '2021',
    link: '#'
  },
  {
    id: 6,
    title: 'SmartFactory Automation System',
    category: 'AI/ML',
    tags: ['Python', 'TensorFlow', 'IoT'],
    image: 'https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Factory automation system with predictive maintenance and real-time production analytics.',
    client: 'Industrial Innovations Co.',
    year: '2022',
    link: '#'
  },
  {
    id: 7,
    title: 'CryptoWallet Dashboard',
    category: 'Web Development',
    tags: ['React', 'Blockchain', 'FinTech'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    description: 'Secure cryptocurrency wallet and trading dashboard with real-time market data.',
    client: 'BlockChain Ventures',
    year: '2023',
    link: '#'
  },
  {
    id: 8,
    title: 'FitTrack Fitness App',
    category: 'Mobile App',
    tags: ['Swift', 'HealthKit', 'Fitness'],
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Personal fitness tracking app with custom workout plans and nutrition guidance.',
    client: 'FitLife Technologies',
    year: '2021',
    link: '#'
  },
  {
    id: 9,
    title: 'DataSense Analytics Platform',
    category: 'SaaS',
    tags: ['Angular', 'Python', 'Data Science'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Business intelligence platform with interactive data visualization and predictive analytics.',
    client: 'DataSense Solutions',
    year: '2022',
    link: '#'
  }
]

const ProjectsPage = () => {
  const scrollToSection = useScrollToSection()
  const categories = ['All', 'Web Development', 'Mobile App', 'SaaS', 'AI/ML']
  const [activeFilter, setActiveFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projectsData)
  const [selectedProject, setSelectedProject] = useState<null | typeof projectsData[0]>(null)
  
  // Filter projects using useEffect to ensure it runs whenever activeFilter changes
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData)
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeFilter))
    }
  }, [activeFilter])
  
  // Handle filter click
  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
  }
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 overflow-hidden">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/5 w-72 h-72 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
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
                <span className="text-primary font-medium text-sm sm:text-base">Our Portfolio</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Innovative{' '}
                <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 w-24 bg-gradient-to-r from-primary to-purple-400 mb-8 mx-auto lg:mx-0"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed"
              >
                Showcasing our innovative solutions across various industries. 
                From web applications to AI-powered systems that drive real results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button 
                  onClick={() => scrollToSection('projects-grid')}
                  variant="primary" 
                  className="px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  View All Projects
                </Button>
                <Button 
                  to="/contact"
                  variant="secondary" 
                  className="px-8 py-3 text-lg border border-white/30 hover:bg-white/10 transition-all duration-300"
                >
                  Discuss Your Project
                </Button>
              </motion.div>
            </div>

            {/* Project Preview Cards */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6">
                  {[
                    { title: 'FinSecure Platform', category: 'Web Development', color: 'primary' },
                    { title: 'MediTrack App', category: 'Mobile App', color: 'blue-500' },
                    { title: 'EcoMarket Store', category: 'E-commerce', color: 'green-500' },
                    { title: 'LearnQuest LMS', category: 'SaaS Platform', color: 'purple-500' }
                  ].map((project, index) => (
                    <motion.div 
                      key={index}
                      className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20 group cursor-pointer`}
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                      animate={{ 
                        y: [0, -10, 0],
                      }}
                      style={{ 
                        animationDuration: `${3 + index * 0.5}s`,
                        animationDelay: `${index * 0.3}s`
                      }}
                    >
                      <div className={`w-8 h-8 sm:w-12 sm:h-12 bg-${project.color}/20 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-4 group-hover:bg-${project.color}/30 transition-colors`}>
                        <div className={`w-4 h-4 sm:w-6 sm:h-6 bg-${project.color === 'primary' ? 'primary' : project.color} rounded-sm sm:rounded-md`}></div>
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-lg mb-1 sm:mb-2 leading-tight">{project.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm">{project.category}</p>
                      <motion.div
                        className="mt-2 sm:mt-4 w-full h-1 bg-gray-600 rounded-full overflow-hidden"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 2, delay: index * 0.2 + 1 }}
                      >
                        <motion.div
                          className={`h-full bg-${project.color === 'primary' ? 'primary' : project.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${75 + Math.random() * 25}%` }}
                          transition={{ duration: 1.5, delay: index * 0.3 + 1.5 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-500/20 rounded-full blur-lg"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
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
            <span className="text-sm mb-2 hidden md:block">Explore projects</span>
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

      {/* Filter Section */}
      <section className="py-6 md:py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center mb-6 md:mb-8">
            <div className="bg-gray-100 dark:bg-gray-800 p-1.5 md:p-2 rounded-lg inline-flex flex-wrap gap-1.5 md:gap-2 justify-center shadow-sm">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-md text-xs md:text-sm font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-grid" className="py-6 md:py-10 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map(project => (
                <motion.div
                  layout
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 10 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer group min-w-0"
                >
                  <div className="relative overflow-hidden h-24 sm:h-48 md:h-64">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4">
                        <div className="flex flex-wrap gap-1 md:gap-2 mb-1 md:mb-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-xs bg-primary/80 text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-xs md:text-sm text-white/90 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-1.5 sm:p-3 md:p-5">
                    <h3 className="text-xs sm:text-base md:text-xl font-bold text-gray-900 dark:text-gray-100 mb-1 sm:mb-2 group-hover:text-primary transition-colors leading-tight break-words">
                      {project.title}
                    </h3>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500 dark:text-gray-400 truncate flex-1 mr-1">{project.category}</span>
                      <span className="font-medium text-gray-900 dark:text-gray-100 flex-shrink-0">{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <h3 className="text-lg md:text-xl text-gray-600 dark:text-gray-300">No projects found in this category.</h3>
              <Button 
                onClick={() => handleFilterClick('All')} 
                variant="secondary" 
                className="mt-4"
              >
                Show All Projects
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-96">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 h-8 w-8 md:h-10 md:w-10 rounded-full bg-black/70 text-white flex items-center justify-center"
                  onClick={() => setSelectedProject(null)}
                >
                  <svg className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-4 md:p-6">
                <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs md:text-sm bg-primary/10 text-primary px-2 md:px-3 py-0.5 md:py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 md:mb-3">{selectedProject.title}</h2>
                <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-gray-300 mb-4 md:mb-6">{selectedProject.description}</p>
                
                <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  <div>
                    <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 md:mb-2">Client</h4>
                    <p className="text-sm md:text-base text-gray-900 dark:text-gray-100">{selectedProject.client}</p>
                  </div>
                  <div>
                    <h4 className="text-xs md:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1 md:mb-2">Year</h4>
                    <p className="text-sm md:text-base text-gray-900 dark:text-gray-100">{selectedProject.year}</p>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button href={selectedProject.link}>
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4 md:mb-6"
            >
              Ready to Build Something Amazing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 md:mb-10"
            >
              Let's turn your vision into reality with our experienced team and cutting-edge technology.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button to="/contact" size="lg">
                Start Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectsPage