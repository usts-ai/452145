import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { FaPlus, FaBell, FaChartLine, FaFile, FaUserPlus, FaCog, FaClipboardList } from 'react-icons/fa';

import Header from '../components/Header';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import ClientsRecents from '../components/ClientsRecents';
import DocumentsRecents from '../components/DocumentsRecents';
import ChartComponent from '../components/ChartComponent';
import { clientsMock, documentsMock, statistiquesMock, donneesGraphique } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -20]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0.5]);
  
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animatedBgRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Effet d'onde sur l'arrière-plan
    if (animatedBgRef.current) {
      gsap.to(animatedBgRef.current, {
        backgroundPositionX: '100%',
        duration: 20,
        repeat: -1,
        ease: 'linear',
      });
    }

    // Effet pour les actions rapides
    gsap.fromTo(
      '.quick-action',
      { scale: 0, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        duration: 0.5, 
        stagger: 0.1,
        delay: 0.8,
        ease: 'back.out(1.7)'
      }
    );
  }, []);

  const handleActionClick = (action: string) => {
    console.log(`Action clicked: ${action}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero section avec effet parallax */}
      <section className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900">
        <motion.div 
          className="absolute inset-0 w-full h-full opacity-20"
          style={{ 
            y: y1,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23FFFFFF\' fill-opacity=\'1\' d=\'M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,144C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            backgroundSize: '200% 100%',
            backgroundPosition: '0% center',
          }}
          ref={animatedBgRef}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 text-white py-12"
              ref={heroRef}
              style={{ opacity }}
            >
              <motion.span 
                className="inline-block px-3 py-1 bg-blue-500 bg-opacity-30 text-blue-100 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Tableau de bord
              </motion.span>
              
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Bienvenue sur votre CRM<br />Pro
              </motion.h1>
              
              <motion.p 
                className="text-blue-100 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Gérez efficacement vos relations clients et suivez tous vos documents en un seul endroit.
              </motion.p>
              
              <div className="flex flex-wrap gap-3">
                <motion.button 
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaPlus className="inline mr-2" />
                  Nouveau client
                </motion.button>
                
                <motion.button 
                  className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg text-white font-medium backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={heroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaFile className="inline mr-2" />
                  Créer un document
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 mt-8 md:mt-0"
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <div className="relative w-full h-80 md:h-96">
                <div className="absolute top-0 right-0 w-5/6 h-full bg-white rounded-xl shadow-2xl overflow-hidden">
                  <div className="p-6">
                    <div className="h-6 w-40 bg-gray-200 rounded mb-6"></div>
                    <div className="space-y-3">
                      <div className="h-4 w-full bg-gray-100 rounded"></div>
                      <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                      <div className="h-4 w-4/6 bg-gray-100 rounded"></div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="h-24 bg-blue-50 rounded-lg"></div>
                      <div className="h-24 bg-purple-50 rounded-lg"></div>
                      <div className="h-24 bg-green-50 rounded-lg"></div>
                      <div className="h-24 bg-yellow-50 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-8 left-0 w-5/6 h-4/6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-xl transform -rotate-6"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Section des actions rapides */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="bg-white rounded-xl shadow-xl p-6 -mt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { icon: FaUserPlus, label: 'Ajouter client', action: 'add-client' },
              { icon: FaFile, label: 'Nouveau document', action: 'new-document' },
              { icon: FaChartLine, label: 'Statistiques', action: 'stats' },
              { icon: FaClipboardList, label: 'Tâches', action: 'tasks' },
              { icon: FaBell, label: 'Notifications', action: 'notifications' },
              { icon: FaCog, label: 'Paramètres', action: 'settings' },
              { icon: FaPlus, label: 'Plus d\'options', action: 'more' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="quick-action flex flex-col items-center justify-center p-4 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer"
                onClick={() => handleActionClick(item.action)}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-2">
                  <item.icon size={20} />
                </div>
                <span className="text-sm text-gray-700 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Statistiques */}
      <section className="py-12" ref={statsRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistiquesMock.map((stat, index) => (
              <StatCard key={index} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Graphique et clients/documents récents */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ChartComponent data={donneesGraphique} />
            <div className="space-y-8">
              <ClientsRecents clients={clientsMock.slice(0, 3)} />
              <DocumentsRecents documents={documentsMock.slice(0, 3)} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Appel à l'action */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\'%3E%3Cpath fill=\'%23FFFFFF\' fill-opacity=\'1\' d=\'M0,192L48,186.7C96,181,192,171,288,181.3C384,192,480,224,576,224C672,224,768,192,864,192C960,192,1056,224,1152,234.7C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Prêt à améliorer votre gestion de relation client ?
            </motion.h2>
            
            <motion.p 
              className="text-blue-100 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explorez toutes les fonctionnalités de notre solution CRM et gagnez en efficacité dans la gestion de vos documents et de vos clients.
            </motion.p>
            
            <motion.button 
              className="px-8 py-4 bg-white text-blue-900 rounded-lg font-medium shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer maintenant
            </motion.button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
