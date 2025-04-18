import { Client, Document, Statistique } from '../types';

export const clientsMock: Client[] = [
  {
    id: '1',
    nom: 'Dupont',
    prenom: 'Jean',
    entreprise: 'Dupont & Associés',
    email: 'jean.dupont@example.com',
    telephone: '06 12 34 56 78',
    dateCreation: '15/03/2025',
    statut: 'Actif',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: '2',
    nom: 'Martin',
    prenom: 'Sophie',
    entreprise: 'Martin Consulting',
    email: 'sophie.martin@example.com',
    telephone: '07 23 45 67 89',
    dateCreation: '22/03/2025',
    statut: 'Actif',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: '3',
    nom: 'Leroy',
    prenom: 'Thomas',
    entreprise: 'Entreprise Leroy',
    email: 'thomas.leroy@example.com',
    telephone: '06 34 56 78 90',
    dateCreation: '05/04/2025',
    statut: 'En attente',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg'
  },
  {
    id: '4',
    nom: 'Petit',
    prenom: 'Marie',
    entreprise: 'Petit Design',
    email: 'marie.petit@example.com',
    telephone: '07 45 67 89 01',
    dateCreation: '12/04/2025',
    statut: 'Actif',
    avatar: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    id: '5',
    nom: 'Durand',
    prenom: 'Michel',
    entreprise: 'Durand & Fils',
    email: 'michel.durand@example.com',
    telephone: '06 56 78 90 12',
    dateCreation: '18/04/2025',
    statut: 'Inactif',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
  }
];

export const documentsMock: Document[] = [
  {
    id: '1',
    nom: 'Contrat de prestation',
    type: 'PDF',
    dateCreation: '16/03/2025',
    taille: '1.2 Mo',
    statut: 'Signé',
    clientId: '1'
  },
  {
    id: '2',
    nom: 'Devis Services Web',
    type: 'Word',
    dateCreation: '23/03/2025',
    taille: '850 Ko',
    statut: 'En attente',
    clientId: '2'
  },
  {
    id: '3',
    nom: 'Facture #2025-001',
    type: 'PDF',
    dateCreation: '25/03/2025',
    taille: '1.5 Mo',
    statut: 'Signé',
    clientId: '1'
  },
  {
    id: '4',
    nom: 'Proposition commerciale',
    type: 'PDF',
    dateCreation: '06/04/2025',
    taille: '2.3 Mo',
    statut: 'Brouillon',
    clientId: '3'
  },
  {
    id: '5',
    nom: 'Accord de confidentialité',
    type: 'Word',
    dateCreation: '13/04/2025',
    taille: '540 Ko',
    statut: 'En attente',
    clientId: '4'
  },
  {
    id: '6',
    nom: 'Contrat de maintenance',
    type: 'PDF',
    dateCreation: '14/04/2025',
    taille: '1.8 Mo',
    statut: 'Brouillon',
    clientId: '5'
  }
];

export const statistiquesMock: Statistique[] = [
  {
    label: 'Nouveaux clients',
    valeur: 24,
    pourcentage: 15,
    evolution: 'hausse'
  },
  {
    label: 'Documents générés',
    valeur: 87,
    pourcentage: 23,
    evolution: 'hausse'
  },
  {
    label: 'Taux de conversion',
    valeur: 68,
    pourcentage: 5,
    evolution: 'baisse'
  },
  {
    label: 'Temps de réponse',
    valeur: 1.8,
    pourcentage: 12,
    evolution: 'hausse'
  }
];

export const donneesGraphique = {
  clients: [12, 19, 15, 24, 18, 21, 22],
  documents: [24, 32, 28, 36, 42, 39, 44],
  labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet']
};
