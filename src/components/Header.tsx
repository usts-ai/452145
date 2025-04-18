import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              CRM Pro
            </motion.div>
          </motion.div>

          {/* Navigation pour desktop */}
          <motion.nav
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['Tableau de bord', 'Clients', 'Documents', 'Rapports'].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className={`font-medium ${
                  isScrolled ? 'text-gray-700' : 'text-gray-100'
                } transition-colors duration-300 relative`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* Actions */}
          <motion.div
            className="hidden md:flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <FaIcons.FaSearch className={`${isScrolled ? 'text-gray-700' : 'text-gray-100'}`} />
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaIcons.FaBell className={`${isScrolled ? 'text-gray-700' : 'text-gray-100'}`} />
              <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <FaIcons.FaUser className="text-white text-sm" />
              </div>
            </motion.div>
          </motion.div>

          {/* Bouton menu mobile */}
          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isMobileMenuOpen ? (
              <FaIcons.FaTimes className={`text-xl ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`} />
            ) : (
              <FaIcons.FaBars className={`text-xl ${isScrolled ? 'text-gray-700' : 'text-gray-100'}`} />
            )}
          </motion.div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {['Tableau de bord', 'Clients', 'Documents', 'Rapports'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="font-medium text-gray-700 py-2 border-b border-gray-200"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                >
                  {item}
                </motion.a>
              ))}
              <div className="flex justify-between pt-2">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <FaIcons.FaSearch className="text-gray-700" />
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="relative">
                    <FaIcons.FaBell className="text-gray-700" />
                    <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2 h-2"></span>
                  </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <FaIcons.FaUser className="text-white text-sm" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
