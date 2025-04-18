import React from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';
import { Statistique } from '../types';

interface StatCardProps {
  stat: Statistique;
  index: number;
}

const StatCard: React.FC<StatCardProps> = ({ stat, index }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <p className="text-gray-600 font-medium mb-1">{stat.label}</p>
          <motion.h3 
            className="text-3xl font-bold text-gray-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {stat.label.includes('Taux') ? `${stat.valeur}%` : stat.valeur}
          </motion.h3>
        </div>
        <motion.div 
          className={`flex items-center ${
            stat.evolution === 'hausse' 
              ? 'text-green-500' 
              : stat.evolution === 'baisse' 
                ? 'text-red-500' 
                : 'text-gray-500'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
        >
          {stat.evolution === 'hausse' ? (
            <FaIcons.FaArrowUp className="mr-1" />
          ) : stat.evolution === 'baisse' ? (
            <FaIcons.FaArrowDown className="mr-1" />
          ) : null}
          <span className="font-semibold">{stat.pourcentage}%</span>
        </motion.div>
      </div>
      <motion.div 
        className="w-full h-2 bg-gray-200 rounded-full mt-4 overflow-hidden"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
      >
        <motion.div 
          className={`h-full rounded-full ${
            stat.evolution === 'hausse' 
              ? 'bg-gradient-to-r from-green-400 to-green-500' 
              : stat.evolution === 'baisse' 
                ? 'bg-gradient-to-r from-red-400 to-red-500' 
                : 'bg-gradient-to-r from-gray-400 to-gray-500'
          }`}
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, stat.pourcentage * 3)}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default StatCard;
