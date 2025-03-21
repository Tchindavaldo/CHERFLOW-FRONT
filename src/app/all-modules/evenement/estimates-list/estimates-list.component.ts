import { Component, OnInit } from '@angular/core';

interface Evenement {
  reference: string;
  type: string;
  titre: string;
  date: Date;
  heure: string;
  lieu: string;
  participants: number;
  status: 'À venir' | 'En cours' | 'Terminé' | 'Annulé';
}

@Component({
  selector: 'app-estimates-list',
  templateUrl: './estimates-list.component.html',
  styleUrls: ['./estimates-list.component.css']
})
export class EstimatesListComponent implements OnInit {
  events: Evenement[] = [
    {
      reference: 'EVT-2024001',
      type: 'Culte',
      titre: 'Culte Dominical',
      date: new Date('2024-03-21'),
      heure: '09:00',
      lieu: 'Salle Principale',
      participants: 250,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024002',
      type: 'Prière',
      titre: 'Veillée de Prière',
      date: new Date('2024-03-22'),
      heure: '20:00',
      lieu: 'Salle de Prière',
      participants: 75,
      status: 'En cours'
    },
    {
      reference: 'EVT-2024003',
      type: 'Étude Biblique',
      titre: 'Étude du Livre des Actes',
      date: new Date('2024-03-23'),
      heure: '18:30',
      lieu: 'Salle d\'Étude',
      participants: 45,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024004',
      type: 'Jeunesse',
      titre: 'Rencontre des Jeunes',
      date: new Date('2024-03-24'),
      heure: '15:00',
      lieu: 'Salle des Jeunes',
      participants: 60,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024005',
      type: 'Action Sociale',
      titre: 'Distribution de Repas',
      date: new Date('2024-03-20'),
      heure: '10:00',
      lieu: 'Centre Communautaire',
      participants: 120,
      status: 'Terminé'
    },
    {
      reference: 'EVT-2024006',
      type: 'Mariage',
      titre: 'Cérémonie de Mariage - Jean & Marie',
      date: new Date('2024-03-25'),
      heure: '14:00',
      lieu: 'Salle Principale',
      participants: 200,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024007',
      type: 'Baptême',
      titre: 'Service de Baptême',
      date: new Date('2024-03-26'),
      heure: '11:00',
      lieu: 'Baptistère',
      participants: 85,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024008',
      type: 'Formation',
      titre: 'Formation des Leaders',
      date: new Date('2024-03-19'),
      heure: '19:00',
      lieu: 'Salle de Conférence',
      participants: 30,
      status: 'Terminé'
    },
    {
      reference: 'EVT-2024009',
      type: 'Chorale',
      titre: 'Répétition de la Chorale',
      date: new Date('2024-03-23'),
      heure: '16:00',
      lieu: 'Salle de Musique',
      participants: 40,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024010',
      type: 'Enfants',
      titre: 'École du Dimanche',
      date: new Date('2024-03-24'),
      heure: '10:00',
      lieu: 'Salle des Enfants',
      participants: 55,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024011',
      type: 'Prière',
      titre: 'Réunion de Prière Matinale',
      date: new Date('2024-03-20'),
      heure: '06:00',
      lieu: 'Salle de Prière',
      participants: 25,
      status: 'Terminé'
    },
    {
      reference: 'EVT-2024012',
      type: 'Évangélisation',
      titre: 'Campagne d\'Évangélisation',
      date: new Date('2024-03-27'),
      heure: '17:00',
      lieu: 'Place de la Ville',
      participants: 150,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024013',
      type: 'Conférence',
      titre: 'Conférence sur la Famille',
      date: new Date('2024-03-18'),
      heure: '18:30',
      lieu: 'Auditorium',
      participants: 180,
      status: 'Terminé'
    },
    {
      reference: 'EVT-2024014',
      type: 'Action Sociale',
      titre: 'Visite aux Malades',
      date: new Date('2024-03-25'),
      heure: '14:30',
      lieu: 'Hôpital Local',
      participants: 15,
      status: 'À venir'
    },
    {
      reference: 'EVT-2024015',
      type: 'Culte',
      titre: 'Service du Soir',
      date: new Date('2024-03-24'),
      heure: '18:00',
      lieu: 'Salle Principale',
      participants: 175,
      status: 'À venir'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  deleteEvent(): void {
    // Logique de suppression à implémenter
    console.log('Suppression de l\'événement');
  }
}
