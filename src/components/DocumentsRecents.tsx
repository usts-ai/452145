import React from 'react';
import { motion } from 'framer-motion';
import { Document } from '../types';
import * as FaIcons from 'react-icons/fa';

interface DocumentsRecentsProps {
  documents: Document[];
}

const DocumentsRecents: React.FC<DocumentsRecentsProps> = ({ documents }) => {
  const getIconByType = (type: string) => {
    switch (type) {
      case 'PDF':
        return <FaIcons.FaFilePdf className="text-red-500" />;
      case 'Word':
        return <FaIcons.FaFileWord className="text-blue-500" />;
      case 'Excel':
        return <FaIcons.FaFileExcel className="text-green-500" />;
      default:
        return <FaIcons.FaFilePdf />;
    }
  };

  const getStatusClass = (statut: string) => {
    switch (statut) {
      case 'Signé':
        return 'bg-green-100 text-green-800';
      case 'En attente':
        return 'bg-yellow-100 text-yellow-800';
      case 'Brouillon':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-4">Documents récents</h2>
      <div className="overflow-hidden">
        <div className="space-y-4">
          {documents.map((document, index) => (
            <motion.div
              key={document.id}
              className="flex items-center p-3 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {getIconByType(document.type)}
              </motion.div>
              <div className="flex-grow">
                <h3 className="font-medium text-gray-800">{document.nom}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{document.dateCreation}</span>
                  <span className="mx-2">•</span>
                  <span>{document.taille}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.span 
                  className={`px-2 py-1 text-xs rounded-full ${getStatusClass(document.statut)}`}
                  whileHover={{ scale: 1.05 }}
                >
                  {document.statut}
                </motion.span>
                <div className="flex space-x-1">
                  <motion.button
                    className="p-1 text-gray-400 hover:text-blue-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaIcons.FaEye />
                  </motion.button>
                  <motion.button
                    className="p-1 text-gray-400 hover:text-blue-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaIcons.FaDownload />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        className="mt-4 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        Voir tous les documents
      </motion.button>
    </motion.div>
  );
};

export default DocumentsRecents;
