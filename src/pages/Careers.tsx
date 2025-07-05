import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../components/Button'
import { useScrollToSection } from '../hooks/useScrollToSection'

// Job listing data
const jobListings = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for an experienced Frontend Developer to join our team and help build exceptional user interfaces for our clients. The ideal candidate has strong experience with React and modern JavaScript.',
    requirements: [
      'At least 5 years of professional experience in frontend development',
      'Expert knowledge of React, TypeScript, and modern JavaScript',
      'Experience with state management solutions (Redux, MobX, Zustand, etc.)',
      'Strong understanding of responsive design and cross-browser compatibility',
      'Experience with CSS preprocessors and CSS-in-JS solutions',
      'Excellent problem-solving skills and attention to detail'
    ],
    responsibilities: [
      'Develop and maintain client-facing applications and internal tools',
      'Collaborate with designers to implement UI/UX designs with precision',
      'Write clean, maintainable, and efficient code',
      'Participate in code reviews and contribute to technical discussions',
      'Stay up-to-date with emerging trends and best practices in frontend development'
    ]
  },
  {
    id: 2,
    title: 'Backend Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    description: 'We are seeking a talented Backend Developer to design and implement server-side logic, databases, and APIs for our applications. You\'ll work closely with frontend developers to integrate user-facing elements with server-side logic.',
    requirements: [
      'At least 3 years of experience in backend development',
      'Strong knowledge of Node.js or Python',
      'Experience with database design and ORM libraries',
      'Familiarity with API design and development',
      'Understanding of server security and data protection',
      'Experience with cloud services (AWS, Azure, or GCP)'
    ],
    responsibilities: [
      'Design and implement robust and scalable backend services',
      'Optimize applications for maximum speed and scalability',
      'Implement security and data protection measures',
      'Integrate with frontend applications',
      'Create and maintain technical documentation'
    ]
  },
  {
    id: 3,
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for a creative and user-focused UX/UI Designer to create intuitive and engaging interfaces for our web and mobile applications. You\'ll collaborate with our product and development teams to design solutions that delight users.',
    requirements: [
      'At least 3 years of experience in UX/UI design for digital products',
      'Strong portfolio demonstrating UX thinking and UI execution',
      'Proficiency in design tools such as Figma, Sketch, or Adobe XD',
      'Understanding of user-centered design processes',
      'Knowledge of interaction design principles and accessibility standards',
      'Experience with design systems'
    ],
    responsibilities: [
      'Create user flows, wireframes, prototypes, and high-fidelity designs',
      'Conduct user research and usability testing',
      'Develop and maintain design systems',
      'Collaborate with developers to ensure proper implementation of designs',
      'Stay current with UX/UI trends and best practices'
    ]
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    department: 'Operations',
    location: 'Remote / San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for a DevOps Engineer to help us build and maintain our infrastructure and deployment pipelines. The ideal candidate is passionate about automation, security, and maintaining reliable systems.',
    requirements: [
      'At least 3 years of DevOps or SRE experience',
      'Strong knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Experience with containerization and orchestration (Docker, Kubernetes)',
      'Familiarity with CI/CD tools and methodologies',
      'Knowledge of infrastructure as code (Terraform, CloudFormation, etc.)',
      'Understanding of networking and security best practices'
    ],
    responsibilities: [
      'Design, build, and maintain our cloud infrastructure',
      'Implement and manage CI/CD pipelines for application deployments',
      'Monitor system health and performance',
      'Troubleshoot and resolve infrastructure issues',
      'Implement security best practices and ensure compliance'
    ]
  },
  {
    id: 5,
    title: 'Project Manager',
    department: 'Project Management',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'We\'re looking for an experienced Project Manager to oversee the planning, execution, and delivery of our software projects. The successful candidate will lead cross-functional teams and ensure projects are completed on time, within scope, and budget.',
    requirements: [
      'At least 5 years of experience managing software development projects',
      'Strong knowledge of project management methodologies (Agile, Scrum, etc.)',
      'Experience with project management tools (Jira, Asana, etc.)',
      'Excellent communication and leadership skills',
      'Ability to manage multiple projects simultaneously',
      'PMP certification is a plus'
    ],
    responsibilities: [
      'Plan and define project scope, goals, and deliverables',
      'Lead cross-functional teams throughout project lifecycles',
      'Create and maintain project documentation',
      'Communicate project status to stakeholders and leadership',
      'Identify and mitigate project risks and issues'
    ]
  }
]

const CareersPage = () => {
  const scrollToSection = useScrollToSection()
  const [filter, setFilter] = useState('All Departments')
  const [selectedJob, setSelectedJob] = useState<null | number>(null)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as File | null
  })

  // Get unique departments for filter using useMemo
  const departments = useMemo(() => {
    const uniqueDepartments = Array.from(new Set(jobListings.map(job => job.department)))
    return ['All Departments', ...uniqueDepartments]
  }, [])
  
  // Filter jobs directly from jobListings each time
  const filteredJobs = useMemo(() => {
    console.log("Filtering with department:", filter)
    return filter === 'All Departments' 
      ? jobListings 
      : jobListings.filter(job => job.department === filter)
  }, [filter])

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your server
    console.log("Form submitted:", formData)
    // Reset form and show success message
    alert("Thank you for your application! We'll be in touch soon.")
    setFormData({ name: '', email: '', phone: '', message: '', resume: null })
    setShowForm(false)
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
      <section className="hero-section relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 pt-16 lg:pt-20">
        {/* Career Growth Visualization */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0">
            {/* Growth chart lines */}
            <svg className="w-full h-full" viewBox="0 0 1200 800">
              <defs>
                <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <motion.path
                d="M100,600 Q300,400 500,300 T900,200 L1100,150"
                stroke="url(#growthGradient)"
                strokeWidth="3"
                fill="none"
                className="text-primary"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 0.5 }}
              />
              <motion.path
                d="M150,650 Q350,500 550,400 T950,300 L1150,250"
                stroke="url(#growthGradient)"
                strokeWidth="2"
                fill="none"
                className="text-purple-400"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1 }}
              />
            </svg>
          </div>
        </div>

        {/* Floating Career Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { Icon: '💼', delay: 0 },
            { Icon: '🚀', delay: 0.5 },
            { Icon: '🎯', delay: 1 },
            { Icon: '💡', delay: 1.5 },
            { Icon: '🏆', delay: 2 },
            { Icon: '📈', delay: 2.5 }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${15 + Math.random() * 70}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4 + Math.random(),
                repeat: Infinity,
                delay: item.delay,
              }}
            >
              {item.Icon}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 py-6 sm:py-8 lg:py-12 pb-12 sm:pb-16">
            {/* Content */}
            <div className="lg:w-3/5 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hidden sm:inline-block px-6 py-3 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6 sm:mb-8"
              >
                <span className="text-purple-400 font-medium text-sm sm:text-base">Join Our Journey</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8"
              >
                Shape Your{' '}
                <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Future
                </span>
                <br />
                With Us
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="h-1 w-32 bg-gradient-to-r from-primary to-purple-400 mb-6 sm:mb-8 mx-auto lg:mx-0"
              ></motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed"
              >
                Explore exciting opportunities at SLYTHOS IT and become part of a team 
                that's building innovative solutions for the future.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 sm:mb-8"
              >
                <Button 
                  onClick={() => scrollToSection('open-positions')}
                  variant="primary" 
                  className="px-10 py-4 text-lg hover:scale-105 transition-transform duration-300"
                >
                  View Open Positions
                </Button>
                <Button 
                  to="/about"
                  variant="secondary" 
                  className="px-10 py-4 text-lg bg-white/5 backdrop-blur-sm border border-white/30 hover:bg-white/15 hover:border-white/50 transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>

              {/* Career Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0"
              >
                {[
                  { label: 'Remote-First', icon: '🌍' },
                  { label: 'Growth Focused', icon: '📊' },
                  { label: 'Flexible Hours', icon: '⏰' },
                  { label: 'Great Benefits', icon: '🎁' }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    whileHover={{ scale: 1.05, color: '#ffffff' }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Career Benefits Visualization */}
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
                      <h3 className="text-2xl font-bold text-white mb-2">Why Join SLYTHOS IT?</h3>
                      <div className="h-1 w-16 bg-primary mx-auto"></div>
                    </div>
                    
                    {[
                      { title: 'Innovation Focus', desc: 'Work on cutting-edge projects', progress: 95 },
                      { title: 'Team Collaboration', desc: 'Supportive work environment', progress: 90 },
                      { title: 'Skill Development', desc: 'Continuous learning opportunities', progress: 88 },
                      { title: 'Work-Life Balance', desc: 'Flexible and remote-friendly', progress: 92 }
                    ].map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="space-y-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-white font-semibold text-sm">{benefit.title}</h4>
                            <p className="text-gray-400 text-xs">{benefit.desc}</p>
                          </div>
                          <span className="text-primary font-bold text-sm">{benefit.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-purple-400 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${benefit.progress}%` }}
                            transition={{ duration: 1.5, delay: 1.2 + index * 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Floating decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
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
            onClick={() => scrollToSection('why-join-us')}
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

      {/* Why Join Us Section */}
      <section id="why-join-us" className="hidden sm:block py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Why Join SLYTHOS IT?
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-8"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              We offer more than just a job; we provide a career with growth opportunities, challenging projects,
              and a supportive environment where your ideas are valued.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {[
              {
                title: "Innovative Work",
                description: "Work on cutting-edge projects using the latest technologies to solve real-world challenges for clients across various industries.",
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: "Growth & Development",
                description: "We invest in our team's professional growth through mentorship, training opportunities, and clear career advancement paths.",
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working arrangements, generous PTO, and a culture that respects your time outside of work for a sustainable career.",
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Competitive Benefits",
                description: "Competitive salary, health insurance, retirement plans, and additional perks to ensure your wellbeing and security.",
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              {
                title: "Inclusive Environment",
                description: "We celebrate diversity and are committed to creating an inclusive workplace where everyone feels welcome and valued.",
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              {
                title: "Global Impact",
                description: "Contribute to projects that make a difference for businesses and users around the world, across multiple industries.",
                icon: (
                  <svg className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1 }
                  }
                }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4 text-primary dark:text-primary-light">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="open-positions" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Current Openings
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 bg-primary mx-auto mb-8"
            ></motion.div>
          </div>
          
          {/* Department filter buttons */}
          <div className="mb-8 flex justify-center">
            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg inline-flex flex-wrap gap-2 justify-center shadow-sm">
              {departments.map(dept => (
                <button
                  key={dept}
                  onClick={() => setFilter(dept)}
                  className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-300 ${
                    filter === dept
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 shadow'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <AnimatePresence mode="wait">
              {filteredJobs.map(job => (
                <motion.div
                  layout
                  key={job.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 10 }}
                  className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                    selectedJob === job.id ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded-full">
                          {job.department}
                        </span>
                        <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded-full">
                          {job.type}
                        </span>
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                    <div className="flex items-center mt-4 text-primary font-medium">
                      <span>{selectedJob === job.id ? 'Hide Details' : 'View Details'}</span>
                      <svg 
                        className={`ml-2 h-5 w-5 transform transition-transform ${
                          selectedJob === job.id ? 'rotate-180' : ''
                        }`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <AnimatePresence>
                    {selectedJob === job.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700"
                      >
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Requirements</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">Responsibilities</h4>
                          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                            {job.responsibilities.map((resp, index) => (
                              <li key={index}>{resp}</li>
                            ))}
                          </ul>
                        </div>

                        <Button 
                          onClick={() => {
                            setSelectedJob(job.id)
                            setShowForm(true)
                          }}
                        >
                          Apply for this Position
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}

              {filteredJobs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-4">No openings in this department at the moment.</h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Please check back later or browse our other departments.</p>
                  <Button onClick={() => setFilter('All Departments')} variant="secondary">
                    Show All Departments
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Application Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Apply for {jobListings.find(j => j.id === selectedJob)?.title}
              </h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 bg-gray-50"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 bg-gray-50"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 bg-gray-50"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter / Additional Information
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 bg-gray-50"
                  placeholder="Tell us why you're interested in this position and how your experience relates"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                  Resume / CV* (PDF format)
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary text-gray-900 bg-gray-50"
                />
              </div>

              <div className="pt-4 border-t border-gray-200 flex justify-end space-x-3">
                <Button 
                  onClick={() => setShowForm(false)} 
                  variant="outline" 
                  type="button"
                >
                  Cancel
                </Button>
                <Button type="submit">
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* General Application Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Don't See a Perfect Fit?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-600 mb-10"
            >
              We're always looking for talented individuals to join our team. Send us your resume, 
              and we'll keep it on file for future opportunities that match your skills and interests.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button to="/contact" variant="secondary">
                Send General Application
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CareersPage