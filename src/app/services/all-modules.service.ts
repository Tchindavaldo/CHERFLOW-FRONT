import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
// import { AllModulesData } from 'src/assets/all-modules-data/all-modules-data';
import { id } from 'src/assets/all-modules-data/id';
import { Event } from '../all-modules/evenement/event.model';

@Injectable({
  providedIn: 'root',
})
export class AllModulesService {
  // Chats

  groups = {
    active: '',
    total: ['general', 'video responsive survey', '500rs', 'warehouse'],
  };
  members = {
    active: 'Mike Litorus',
    total: [
      { name: 'John Doe', count: 3 },
      { name: 'Richard Miles', count: 0 },
      { name: 'John Smith', count: 7 },
      { name: 'Mike Litorus', count: 9 },
    ],
  };

  // Api Methods for All modules

  public apiurl: any;

  // Headers Setup
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers,
  };

  // API endpoint
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  // Handling Errors
  private handleError(error: any) {
    return throwError(error);
  }

  // Get Method Api
  get(type: any): Observable<[]> {
    this.apiurl = `api/${type}`;

    return this.http
      .get<[]>(this.apiurl)
      .pipe(tap(), catchError(this.handleError));
  }

  // Post Method Api
  add(user: any, type: any): Observable<any> {
    this.apiurl = `api/${type}`;
    user.id = null;
    return this.http
      .post<any>(this.apiurl, user, this.httpOptions)
      .pipe(tap(), catchError(this.handleError));
  }

  // Update Method Api
  update(user: any, type: any): Observable<any> {
    this.apiurl = `api/${type}`;
    const url = `${this.apiurl}/${user.id}`;
    return this.http.put<any>(url, user, this.httpOptions).pipe(
      map(() => user),
      catchError(this.handleError)
    );
  }

  // Delete Method Api
  delete(id: id, type: any): Observable<id> {
    this.apiurl = `api/${type}`;
    const url = `${this.apiurl}/${id}`;
    return this.http
      .delete<id>(url, this.httpOptions)
      .pipe(catchError(this.handleError));
  }
  estimates = [
    {
      id: 1,
      number: 'EVT-001',
      customer_name: 'Culte Dominical',
      estimate_date: '2024-03-21',
      expiry_date: '2024-03-21',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 2,
      number: 'EVT-002',
      customer_name: 'Veillée de Prière',
      estimate_date: '2024-03-22',
      expiry_date: '2024-03-22',
      amount: 'Adultes',
      status: 'Membres',
      type: 'En cours'
    },
    {
      id: 3,
      number: 'EVT-003',
      customer_name: 'Étude du Livre des Actes',
      estimate_date: '2024-03-23',
      expiry_date: '2024-03-23',
      amount: 'Jeunes',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 4,
      number: 'EVT-004',
      customer_name: 'Rencontre des Jeunes',
      estimate_date: '2024-03-24',
      expiry_date: '2024-03-24',
      amount: 'Jeunes',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 5,
      number: 'EVT-005',
      customer_name: 'Distribution de Repas',
      estimate_date: '2024-03-20',
      expiry_date: '2024-03-20',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'Terminé'
    },
    {
        id: 6,
      number: 'EVT-006',
      customer_name: 'Cérémonie de Mariage - Jean & Marie',
      estimate_date: '2024-03-25',
      expiry_date: '2024-03-25',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    },
    {
        id: 7,
      number: 'EVT-007',
      customer_name: 'Service de Baptême',
      estimate_date: '2024-03-26',
      expiry_date: '2024-03-26',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 8,
      number: 'EVT-008',
      customer_name: 'Formation des Leaders',
      estimate_date: '2024-03-19',
      expiry_date: '2024-03-19',
      amount: 'Adultes',
      status: 'Public',
      type: 'Terminé'
    },
    {
      id: 9,
      number: 'EVT-009',
      customer_name: 'Répétition de la Chorale',
      estimate_date: '2024-03-23',
      expiry_date: '2024-03-23',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 10,
      number: 'EVT-010',
      customer_name: 'École du Dimanche',
      estimate_date: '2024-03-24',
      expiry_date: '2024-03-24',
      amount: 'Enfants',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 11,
      number: 'EVT-011',
      customer_name: 'Réunion de Prière Matinale',
      estimate_date: '2024-03-20',
      expiry_date: '2024-03-20',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'Terminé'
    },
    {
      id: 12,
      number: 'EVT-012',
      customer_name: 'Campagne d\'Évangélisation',
      estimate_date: '2024-03-27',
      expiry_date: '2024-03-27',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 13,
      number: 'EVT-013',
      customer_name: 'Conférence sur la Famille',
      estimate_date: '2024-03-18',
      expiry_date: '2024-03-18',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'Terminé'
    },
    {
      id: 14,
      number: 'EVT-014',
      customer_name: 'Visite aux Malades',
      estimate_date: '2024-03-25',
      expiry_date: '2024-03-25',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    },
    {
      id: 15,
      number: 'EVT-015',
      customer_name: 'Service du Soir',
      estimate_date: '2024-03-24',
      expiry_date: '2024-03-24',
      amount: 'Tous les âges',
      status: 'Public',
      type: 'À venir'
    }
]
  customers = [
    {
      id: 1,
      name: 'Brian Johnson',
      email: 'brianjohnson@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-02.jpg',
      amount_due: '$8295',
      registered_on: 'Wed Nov 16 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Customer',
    },
    {
      id: 2,
      name: 'Marie Canales',
      email: 'mariecanales@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-03.jpg',
      amount_due: '$1750',
      registered_on: 'Wed May 08 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Inactive',
      role: 'Customer',
    },
    {
      id: 3,
      name: 'Barbara Moore',
      email: 'barbaramoore@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-04.jpg',
      amount_due: '$8295',
      registered_on: 'Wed Oct 24 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Admin',
    },
    {
      id: 4,
      name: 'Greg Lynch',
      email: 'greglynch@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-05.jpg',
      amount_due: '$3000',
      registered_on: 'Wed Oct 11 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Inctive',
      role: 'Customer',
    },
    {
      id: 5,
      name: 'Karlene Chaidez',
      email: 'karlenechaidez@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-06.jpg',
      amount_due: '-',
      registered_on: 'Wed Sep 29 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Inctive',
      role: 'Admin',
    },
    {
      id: 6,
      name: 'John Blair',
      email: 'johnblair@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-07.jpg',
      amount_due: '$50',
      registered_on: 'Wed Aug 13 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Customer',
    },
    {
      id: 7,
      name: 'Russell Copeland',
      email: 'russellcopeland@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-08.jpg',
      amount_due: '-',
      registered_on: 'Wed Jul 02 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Inctive',
      role: 'Customer',
    },
    {
      id: 8,
      name: 'Leatha Bailey ',
      email: 'leathabailey@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-09.jpg',
      amount_due: '$480',
      registered_on: 'Wed Sep 29 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Customer',
    },
    {
      id: 9,
      name: 'Joseph Collins',
      email: 'josephcollins@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-10.jpg',
      amount_due: '$600',
      registered_on: 'Wed May 16 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Customer',
    },
    {
      id: 10,
      name: 'Jennifer Floyd',
      email: 'jenniferfloyd@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-11.jpg',
      amount_due: '-',
      registered_on: 'Wed Sep 17 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Admin',
    },
    {
      id: 11,
      name: 'Alex Campbell',
      email: 'alexcampbell@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-12.jpg',
      amount_due: '-',
      registered_on: 'Wed Mar 30 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Customer',
    },
    {
      id: 12,
      name: 'Wendell Ward',
      email: 'wendellward@example.com',
      phone: '9876543210',
      img: 'assets/img/profiles/avatar-13.jpg',
      amount_due: '$7500',
      registered_on: 'Wed Mar 22 2020 09:41:48 GMT+0530 (India Standard Time)',
      status: 'Active',
      role: 'Admin',
    },
  ];
  expenses = [
    {
      id : 1,
      category: 'Advertising',
      customer_name : "Barbara Moore",
      customer_img : "assets/img/profiles/avatar-04.jpg",
      expense_date : "Wed Sep 15 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$145",
      status : "Approved",
    },
    {
      id : 2,
      category: 'Food',
      customer_name : "Russell Copeland",
      customer_img : "assets/img/profiles/avatar-05.jpg",
      expense_date : "Wed Sep 19 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$214",
      status : "Pending",
    },
    {
      id : 3,
      category: 'Marketing',
      customer_name : "Brian Johnson",
      customer_img : "assets/img/profiles/avatar-06.jpg",
      expense_date : "Wed Nov 11 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$254",
      status : "Pending",
    },
    {
      id : 4,
      category: 'Repairs',
      customer_name : "Marie Canales",
      customer_img : "assets/img/profiles/avatar-08.jpg",
      expense_date : "Wed Oct 3 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$60",
      status : "Approved",
    },
    {
      id : 5,
      category: 'Software',
      customer_name : "Greg Lynch",
      customer_img : "assets/img/profiles/avatar-09.jpg",
      expense_date : "Wed Oct 23 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$145",
      status : "Approved",
    },
    {
      id : 6,
      category: 'Stationary',
      customer_name : "John Blair",
      customer_img : "assets/img/profiles/avatar-10.jpg",
      expense_date : "Wed Sep 29 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$154",
      status : "Pending",
    },
    {
      id : 7,
      category: 'Travel',
      customer_name : "Karlene Chaidez",
      customer_img : "assets/img/profiles/avatar-11.jpg",
      expense_date : "Wed Oct 9 2020 09:41:48 GMT+0530 (India Standard Time)",
      notes: "Lorem ipsum dollar..",
      amount : "$75",
      status : "Approved",
    },
  ]
  
invoices = [
  {
    id : 1,
    number: 'INV-65ZTE15',
    customer_name : "Barbara Moore",
    customer_img : "assets/img/profiles/avatar-04.jpg",
    created_date : "Wed Nov 16 2020 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 23 2020 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 23 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$100",      
    status : "Paid",
  },
  {
    id : 2,
    number: 'INV-65ZTE15',
    customer_name : "Karlene Chaidez",
    customer_img : "assets/img/profiles/avatar-05.jpg",
    created_date : "Wed Nov 14 2020 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 18 2020 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 20 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$222",      
    status : "Sent",
  },
  {
    id : 3,
    number: 'INV-65ZTE15',
    customer_name : "Russell Copeland",
    customer_img : "assets/img/profiles/avatar-06.jpg",
    created_date : "Wed Nov 7 2020 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 10 2020 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 13 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$347",      
    status : "Partially Paid",
  },
  {
    id : 4,
    number: 'INV-65ZTE15',
    customer_name : "Joseph Collins",
    customer_img : "assets/img/profiles/avatar-07.jpg",
    created_date : "Wed Nov 24 2020 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 25 2020 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 27 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$826",      
    status : "Overdue",
  },
  {
    id : 5,
    number: 'INV-65ZTE15',
    customer_name : "Jennifer Floyd",
    customer_img : "assets/img/profiles/avatar-08.jpg",
    created_date : "Wed Nov 17 2020 09:41:48 GMT+0530 (India Standard Time)",     
    due_date : "Wed Nov 18 2020 09:41:48 GMT+0530 (India Standard Time)",    
    paid_on : "Wed Nov 19 2020 09:41:48 GMT+0530 (India Standard Time)",    
    amount : "$826",      
    status : "Paid",
  },
]

  // Méthodes pour les événements
  getEstimate(id: string): Observable<Event> {
    // Trouver l'événement dans la liste
    const event = this.estimates.find(e => e.id.toString() === id);

    if (event) {
      // Conversion des données au format Event
      const formattedEvent: Event = {
        id: event.id.toString(),
        titre: event.customer_name,
        date: event.estimate_date,
        heureDebut: '09:00',
        heureFin: '11:00',
        frequentation: event.amount,
        visibilite: event.status as 'Public' | 'Privé',
        localisation: event.number,
        status: event.type as 'À venir' | 'En cours' | 'Terminé' | 'Annulé'
      };
      return of(formattedEvent);
    }
    return throwError('Événement non trouvé');
  }

  deleteEstimate(id: string): Observable<void> {
    const index = this.estimates.findIndex(e => e.id.toString() === id);
    if (index !== -1) {
      this.estimates.splice(index, 1);
      return of(void 0);
    }
    return throwError('Événement non trouvé');
  }

  addEstimate(event: Event): Observable<Event> {
    const newId = Math.max(...this.estimates.map(e => e.id)) + 1;
    const newEstimate = {
      id: newId,
      number: `EVT-${String(newId).padStart(3, '0')}`,
      customer_name: event.titre,
      estimate_date: event.date,
      expiry_date: event.date,
      amount: event.frequentation,
      status: event.visibilite,
      type: event.status
    };
    this.estimates.push(newEstimate);
    return of(event);
  }

  updateEstimate(id: string, event: Event): Observable<Event> {
    const index = this.estimates.findIndex(e => e.id.toString() === id);
    if (index !== -1) {
      this.estimates[index] = {
        ...this.estimates[index],
        customer_name: event.titre,
        estimate_date: event.date,
        status: this.reverseMapStatus(event.status)
      };
      return of(event);
    }
    return throwError('Événement non trouvé');
  }

  getAllEstimates(): Observable<Event[]> {
    return of(this.estimates.map(estimate => ({
      id: estimate.id.toString(),
      titre: estimate.customer_name,
      date: estimate.estimate_date,
      heureDebut: '09:00',
      heureFin: '11:00',
      frequentation: estimate.amount,
      visibilite: estimate.status as 'Public' | 'Privé',
      localisation: estimate.number,
      status: estimate.type as 'À venir' | 'En cours' | 'Terminé' | 'Annulé'
    })));
  }

  private mapStatus(status: string): 'À venir' | 'En cours' | 'Terminé' | 'Annulé' {
    switch (status) {
      case 'Accepted': return 'À venir';
      case 'Sent': return 'En cours';
      case 'Expired': return 'Terminé';
      case 'Declined': return 'Annulé';
      default: return 'À venir';
    }
  }

  private reverseMapStatus(status: string): string {
    switch (status) {
      case 'À venir': return 'Accepted';
      case 'En cours': return 'Sent';
      case 'Terminé': return 'Expired';
      case 'Annulé': return 'Declined';
      default: return 'Accepted';
    }
  }
}
