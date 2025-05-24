import { Component, OnInit } from '@angular/core';
import { AllModulesService } from '../../../services/all-modules.service';
import { ToastrService } from 'ngx-toastr';
import { id } from 'src/assets/all-modules-data/id';

interface Evenement {
  id: number;
  titre: string;
  date: Date;
  heureDebut?: string;
  heureFin?: string;
  dureeType?: 'journee' | 'jours';
  frequentation: string;
  visibilite: string;
  localisation?: string;
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
      id: 1,
      titre: 'Culte Dominical',
      date: new Date('2024-03-21'),
      heureDebut: '09:00',
      heureFin: '11:00',
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Salle Principale',
      status: 'À venir'
    },
    {
      id: 2,
      titre: 'Veillée de Prière',
      date: new Date('2024-03-22'),
      dureeType: 'journee',
      frequentation: 'Adultes',
      visibilite: 'Membres',
      localisation: 'Salle de Prière',
      status: 'En cours'
    },
    {
      id: 3,
      titre: 'Étude du Livre des Actes',
      date: new Date('2024-03-23'),
      heureDebut: '18:30',
      heureFin: '20:00',
      frequentation: 'Jeunes',
      visibilite: 'Public',
      localisation: 'Salle d\'Étude',
      status: 'À venir'
    },
    {
      id: 4,
      titre: 'Rencontre des Jeunes',
      date: new Date('2024-03-24'),
      frequentation: 'Jeunes',
      visibilite: 'Public',
      localisation: 'Salle des Jeunes',
      status: 'À venir'
    },
    {
      id: 5,
      titre: 'Distribution de Repas',
      date: new Date('2024-03-20'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Centre Communautaire',
      status: 'Terminé'
    },
    {
      id: 6,
      titre: 'Cérémonie de Mariage - Jean & Marie',
      date: new Date('2024-03-25'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Salle Principale',
      status: 'À venir'
    },
    {
      id: 7,
      titre: 'Service de Baptême',
      date: new Date('2024-03-26'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Baptistère',
      status: 'À venir'
    },
    {
      id: 8,
      titre: 'Formation des Leaders',
      date: new Date('2024-03-19'),
      frequentation: 'Adultes',
      visibilite: 'Public',
      localisation: 'Salle de Conférence',
      status: 'Terminé'
    },
    {
      id: 9,
      titre: 'Répétition de la Chorale',
      date: new Date('2024-03-23'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Salle de Musique',
      status: 'À venir'
    },
    {
      id: 10,
      titre: 'École du Dimanche',
      date: new Date('2024-03-24'),
      frequentation: 'Enfants',
      visibilite: 'Public',
      localisation: 'Salle des Enfants',
      status: 'À venir'
    },
    {
      id: 11,
      titre: 'Réunion de Prière Matinale',
      date: new Date('2024-03-20'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Salle de Prière',
      status: 'Terminé'
    },
    {
      id: 12,
      titre: 'Campagne d\'Évangélisation',
      date: new Date('2024-03-27'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Place de la Ville',
      status: 'À venir'
    },
    {
      id: 13,
      titre: 'Conférence sur la Famille',
      date: new Date('2024-03-18'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Auditorium',
      status: 'Terminé'
    },
    {
      id: 14,
      titre: 'Visite aux Malades',
      date: new Date('2024-03-25'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Hôpital Local',
      status: 'À venir'
    },
    {
      id: 15,
      titre: 'Service du Soir',
      date: new Date('2024-03-24'),
      frequentation: 'Tous les âges',
      visibilite: 'Public',
      localisation: 'Salle Principale',
      status: 'À venir'
    }
  ];
  selectedEventId: number | null = null;

  constructor(
    private allModulesService: AllModulesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    // Comme nous avons déjà les données en dur, nous n'avons pas besoin de loadEvents()
    // this.loadEvents();
  }

  openDeleteModal(eventId: number) {
    this.selectedEventId = eventId;
  }

  deleteEvent() {
    if (!this.selectedEventId) return;

    // Trouver l'index de l'événement à supprimer
    const index = this.events.findIndex(e => e.id === this.selectedEventId);
    if (index !== -1) {
      this.events.splice(index, 1);
      this.toastr.success('Événement supprimé avec succès');
      this.selectedEventId = null;
    }

    // Note: La partie suivante est commentée car nous n'avons pas d'API backend pour le moment
    /*
    const idToDelete = new id(this.selectedEventId);
    this.allModulesService.delete(idToDelete, 'events').subscribe(
      () => {
        this.toastr.success('Événement supprimé avec succès');
        this.loadEvents();
        this.selectedEventId = null;
      },
      error => {
        this.toastr.error('Erreur lors de la suppression de l\'événement');
        console.error('Erreur:', error);
      }
    );
    */
  }
}
