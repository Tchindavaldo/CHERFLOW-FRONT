export interface Event {
    id: string;
    titre: string;
    date: string;
    heureDebut: string;
    heureFin: string;
    dureeType?: 'journee' | 'jours';
    frequentation: string;
    visibilite: 'Public' | 'Privé';
    localisation: string;
    status: 'À venir' | 'En cours' | 'Terminé' | 'Annulé';
    created_at?: string;
    updated_at?: string;
} 