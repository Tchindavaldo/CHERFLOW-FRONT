export interface RendezVous {
  id: string;
  nomContact: string;
  email: string;
  telephone: string;
  date: string;
  heure: string;
  statut: 'En attente' | 'Confirmé' | 'Annulé';
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
} 