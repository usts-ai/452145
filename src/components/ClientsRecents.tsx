import React from 'react';
import { motion } from 'framer-motion';
import { Client } from '../types';

interface ClientsRecentsProps {
  clients: Client[];
}

const ClientsRecents: React.FC<ClientsRecentsProps> = ({ clients }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Clients récents</h2>
      <div className="space-y-4">
        {clients.map((client, index) => (
          <motion.div
            key={client.id}
            className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0 border-2 border-blue-100"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            >
              <img 
                src={client.avatar || `https://ui-avatars.com/api/?name=${client.prenom}+${client.nom}&background=random`} 
                alt={`${client.prenom} ${client.nom}`} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <div className="flex-grow">
              <h3 className="font-medium text-gray-800">{client.prenom} {client.nom}</h3>
              <p className="text-sm text-gray-500">{client.entreprise}</p>
            </div>
            <div className="flex-shrink-0">
              <motion.span 
                className={`px-2 py-1 text-xs rounded-full ${
                  client.statut === 'Actif' 
                    ? 'bg-green-100 text-green-800' 
                    : client.statut === 'Inactif' 
                      ? 'bg-gray-100 text-gray-800' 
                      : 'bg-yellow-100 text-yellow-800'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {client.statut}
              </motion.span>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        Voir tous les clients
      </motion.button>
    </motion.div>
  );
};

export default ClientsRecents;
