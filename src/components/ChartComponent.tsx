import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface ChartProps {
  data: {
    labels: string[];
    clients: number[];
    documents: number[];
  };
}

const ChartComponent: React.FC<ChartProps> = ({ data }) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...data.clients, ...data.documents);
  
  useEffect(() => {
    if (chartRef.current) {
      // Animation des barres du graphique
      gsap.fromTo(
        '.bar-clients',
        { height: 0, opacity: 0 },
        { 
          height: (i) => `${(data.clients[i] / maxValue) * 100}%`, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
      
      gsap.fromTo(
        '.bar-documents',
        { height: 0, opacity: 0 },
        { 
          height: (i) => `${(data.documents[i] / maxValue) * 100}%`, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.1,
          delay: 0.3,
          ease: 'power3.out'
        }
      );
    }
  }, [data, maxValue]);

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Statistiques mensuelles</h2>
        <div className="flex space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
            <span className="text-sm text-gray-600">Clients</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
            <span className="text-sm text-gray-600">Documents</span>
          </div>
        </div>
      </div>
      
      <div className="h-60 w-full" ref={chartRef}>
        <div className="flex h-full justify-between items-end relative">
          {data.labels.map((label, index) => (
            <div key={index} className="flex-1 flex flex-col items-center group">
              <div className="relative h-[90%] w-full flex items-end justify-center">
                {/* Tooltip au survol */}
                <div className="absolute bottom-full mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none whitespace-nowrap">
                  <div>Clients: {data.clients[index]}</div>
                  <div>Documents: {data.documents[index]}</div>
                </div>
                
                {/* Barre des clients */}
                <div 
                  className="bar-clients w-4 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md mr-1 relative z-10" 
                  style={{ height: '0%' }}
                ></div>
                
                {/* Barre des documents */}
                <div 
                  className="bar-documents w-4 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md ml-1 relative z-10" 
                  style={{ height: '0%' }}
                ></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">{label}</div>
            </div>
          ))}
          
          {/* Lignes de grille horizontales */}
          <div className="absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="border-b border-gray-100 w-full h-0"
                style={{ bottom: `${i * 25}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      <motion.div 
        className="mt-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Exporter les statistiques
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ChartComponent;
