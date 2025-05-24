import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RendezVous } from './rendez-vous.model';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {
  // Données statiques pour simuler une API
  private rendezVousList: RendezVous[] = [
    {
      id: 'RDV-001',
      nomContact: 'Jean Dupont',
      email: 'jean.dupont@example.com',
      telephone: '0612345678',
      date: '2025-04-15',
      heure: '10h00',
      statut: 'Confirmé',
      notes: 'Rendez-vous pour discuter du baptême.',
      createdAt: '2023-09-01',
      updatedAt: '2023-09-05'
    },
    {
      id: 'RDV-002',
      nomContact: 'Marie Martin',
      email: 'marie.martin@example.com',
      telephone: '0723456789',
      date: '2025-04-18',
      heure: '14h30',
      statut: 'En attente',
      notes: 'Premier contact pour mariage.',
      createdAt: '2023-09-02',
      updatedAt: '2023-09-02'
    },
    {
      id: 'RDV-003',
      nomContact: 'Pierre Rousseau',
      email: 'pierre.r@example.com',
      telephone: '0634567890',
      date: '2025-04-20',
      heure: '09:00',
      statut: 'Annulé',
      notes: 'Annulé par le contact.',
      createdAt: '2023-09-03',
      updatedAt: '2023-09-04'
    },
    {
      id: 'RDV-345',
      nomContact: 'voir',
      email: 'voir@example.com',
      telephone: '0745678901',
      date: '2025-04-16',
      heure: '15:48',
      statut: 'En attente',
      notes: 'Demande d\'information.',
      createdAt: '2023-10-15',
      updatedAt: '2023-10-15'
    },
    {
      id: 'RDV-313',
      nomContact: 'voir la fortune',
      email: 'fortune@example.com',
      telephone: '0756789012',
      date: '2025-04-20',
      heure: '12:49',
      statut: 'Confirmé',
      notes: 'Rendez-vous important.',
      createdAt: '2023-11-10',
      updatedAt: '2023-11-10'
    }
  ];

  constructor(private http: HttpClient) { }

  // Récupérer tous les rendez-vous
  getAllRendezVous(): Observable<RendezVous[]> {
    // Simuler un appel API
    return of(this.rendezVousList);
  }

  // Récupérer un rendez-vous par son ID
  getRendezVousById(id: string): Observable<RendezVous> {
    return of(this.rendezVousList.find(r => r.id === id) as RendezVous)
      .pipe(
        catchError(error => {
          console.error('Erreur lors de la récupération du rendez-vous', error);
          throw 'Rendez-vous non trouvé';
        })
      );
  }

  // Créer un nouveau rendez-vous
  createRendezVous(rendezVous: Omit<RendezVous, 'id' | 'createdAt' | 'updatedAt'>): Observable<RendezVous> {
    const newRendezVous: RendezVous = {
      ...rendezVous,
      id: `RDV-${this.generateId()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    this.rendezVousList.push(newRendezVous);
    return of(newRendezVous);
  }

  // Mettre à jour un rendez-vous existant
  updateRendezVous(id: string, rendezVous: Partial<RendezVous>): Observable<RendezVous> {
    const index = this.rendezVousList.findIndex(r => r.id === id);
    
    if (index === -1) {
      return of().pipe(
        catchError(() => {
          throw 'Rendez-vous non trouvé';
        })
      );
    }

    const updatedRendezVous: RendezVous = {
      ...this.rendezVousList[index],
      ...rendezVous,
      updatedAt: new Date().toISOString()
    };

    this.rendezVousList[index] = updatedRendezVous;
    return of(updatedRendezVous);
  }

  // Supprimer un rendez-vous
  deleteRendezVous(id: string): Observable<void> {
    const index = this.rendezVousList.findIndex(r => r.id === id);
    
    if (index === -1) {
      return of().pipe(
        catchError(() => {
          throw 'Rendez-vous non trouvé';
        })
      );
    }

    this.rendezVousList.splice(index, 1);
    return of(void 0);
  }

  // Générer un ID unique
  private generateId(): string {
    return Math.floor(100 + Math.random() * 900).toString();
  }
} 