import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Première colonne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              CRM Pro
            </motion.div>
            <p className="text-gray-300 mb-6">
              Solutions digitales professionnelles pour gérer vos relations clients et vos documents d'entreprise.
            </p>
            <div className="flex space-x-4">
              {[FaIcons.FaFacebookF, FaIcons.FaTwitter, FaIcons.FaLinkedinIn, FaIcons.FaInstagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="bg-gray-700 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-colors h-10 w-10 rounded-full flex items-center justify-center"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <Icon className="text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Deuxième colonne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Liens rapides</h3>
            <div className="grid grid-cols-1 gap-3">
              {['Accueil', 'Services', 'À propos', 'Contact', 'Espace membre', 'Blog', 'FAQ'].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center"
                  whileHover={{ x: 5, color: '#fff' }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <span className="mr-2">&raquo;</span>
                  {item}
                  <motion.span
                    className="absolute h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 bottom-0 left-0"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Troisième colonne */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-6">Contactez-nous</h3>
            <div className="space-y-4">
              {[
                { icon: FaIcons.FaMapMarkerAlt, text: '123 Avenue des Entreprises, 75000 Paris' },
                { icon: FaIcons.FaPhone, text: '+33 1 23 45 67 89' },
                { icon: FaIcons.FaEnvelope, text: 'contact@crmpro.fr' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <item.icon className="text-blue-400 mt-1 mr-3" />
                  <p className="text-gray-300">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-white font-medium mb-3">Inscrivez-vous à notre newsletter</h4>
              <div className="flex mt-2">
                <input 
                  type="email" 
                  placeholder="Votre email" 
                  className="bg-gray-800 text-white px-4 py-3 rounded-l-md focus:outline-none flex-grow"
                />
                <motion.button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 rounded-r-md text-white font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  Envoyer
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p> {new Date().getFullYear()} CRM Pro. Tous droits réservés.</p>
          <div className="flex justify-center mt-4 space-x-6 text-sm">
            <motion.a 
              href="#" 
              className="hover:text-white"
              whileHover={{ y: -2 }}
            >
              Mentions légales
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white"
              whileHover={{ y: -2 }}
            >
              Politique de confidentialité
            </motion.a>
            <motion.a 
              href="#" 
              className="hover:text-white"
              whileHover={{ y: -2 }}
            >
              CGV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
