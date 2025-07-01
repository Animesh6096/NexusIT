import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Team', path: '/team' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle navigation click - combines navigation with scroll to top
  const handleNavClick = () => {
    scrollToTop();
    setIsOpen(false); // Close mobile menu if open
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-lg bg-opacity-70 bg-white/70 dark:bg-gray-900/70 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Mobile: Hamburger + Logo + Dark Mode Toggle */}
          <div className="flex md:hidden items-center justify-between w-full">
            {/* Hamburger menu button - left side */}
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative inline-flex items-center justify-center p-2 focus:outline-none transition-all duration-300 ${
                scrolled
                  ? 'text-gray-600 dark:text-gray-300 hover:text-primary'
                  : 'text-white/90 hover:text-white'
              }`}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              <span className="sr-only">Open main menu</span>
              
              {/* Animated hamburger lines */}
              <div className="w-5 h-5 flex flex-col justify-center items-center">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 w-5 bg-current rounded-full"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 w-5 bg-current rounded-full mt-1"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="block h-0.5 w-5 bg-current rounded-full mt-1"
                />
              </div>
            </motion.button>

            {/* Logo - center */}
            <div className="flex-1 flex justify-center">
              <Link to="/" onClick={handleNavClick} className="flex items-center">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"
                >
                  SLYTHOS IT
                </motion.div>
              </Link>
            </div>

            {/* Dark Mode Toggle - right side */}
            <DarkModeToggle />
          </div>

          {/* Desktop Layout */}
          {/* Logo - Desktop */}
          <div className="hidden md:flex flex-shrink-0 min-w-0">
            <Link to="/" onClick={handleNavClick} className="flex items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent truncate"
              >
                SLYTHOS IT
              </motion.div>
            </Link>
          </div>

          {/* Desktop Navigation - keeping it centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={handleNavClick}
                    className={({ isActive }: { isActive: boolean }) =>
                      `nav-link text-base font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-primary border-b-2 border-primary pb-1'
                          : scrolled
                          ? 'text-gray-700 dark:text-white hover:text-primary hover:border-b-2 hover:border-primary hover:pb-1'
                          : 'text-white hover:text-primary hover:border-b-2 hover:border-primary hover:pb-1'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Dark Mode Toggle - Desktop */}
          <div className="hidden md:flex items-center justify-end space-x-4">
            <DarkModeToggle className="relative z-10" />
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden absolute top-full left-0 right-0 mx-3 mt-2 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={handleNavClick}
                      className={({ isActive }: { isActive: boolean }) =>
                        `nav-link block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? 'text-white bg-gradient-to-r from-primary to-blue-400 shadow-lg transform scale-105'
                            : 'text-gray-700 dark:text-white hover:text-primary hover:bg-white/50 dark:hover:bg-gray-800/50 hover:backdrop-blur-sm hover:shadow-md hover:transform hover:scale-105'
                        }`
                      }
                    >
                      {({ isActive }: { isActive: boolean }) => (
                        <div className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            isActive ? 'bg-white' : 'bg-primary/60'
                          }`}></div>
                          <span>{item.name}</span>
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative bottom gradient */}
              <div className="h-1 bg-gradient-to-r from-primary via-blue-400 to-primary opacity-50"></div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;