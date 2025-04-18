export interface Client {
  id: string;
  nom: string;
  prenom: string;
  entreprise: string;
  email: string;
  telephone: string;
  dateCreation: string;
  statut: 'Actif' | 'Inactif' | 'En attente';
  avatar?: string;
}

export interface Document {
  id: string;
  nom: string;
  type: 'PDF' | 'Word' | 'Excel';
  dateCreation: string;
  taille: string;
  statut: 'Signé' | 'En attente' | 'Brouillon';
  clientId: string;
}

export interface Statistique {
  label: string;
  valeur: number;
  pourcentage: number;
  evolution: 'hausse' | 'baisse' | 'stable';
}
