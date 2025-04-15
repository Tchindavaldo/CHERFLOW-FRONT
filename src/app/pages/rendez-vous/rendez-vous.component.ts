import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RendezVousService } from './rendez-vous.service';
import { RendezVous } from './rendez-vous.model';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {
  rendezVousList: RendezVous[] = [];
  filteredRendezVous: RendezVous[] = [];
  searchTerm: string = '';
  filterStatus: string = '';
  filterDate: string = '';
  selectedRendezVous: RendezVous | null = null;
  activeMenuId: string | null = null;

  constructor(
    private router: Router,
    private rendezVousService: RendezVousService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadRendezVous();
    
    // Fermer les menus d'action lorsqu'on clique ailleurs sur la page
    document.addEventListener('click', (event) => {
      if (this.activeMenuId && !(event.target as HTMLElement).closest('.action-icon') && 
          !(event.target as HTMLElement).closest('.dropdown-menu')) {
        this.closeAllActionMenus();
      }
    });
  }

  loadRendezVous(): void {
    this.rendezVousService.getAllRendezVous().subscribe(
      (data: RendezVous[]) => {
        this.rendezVousList = data;
        this.filteredRendezVous = [...this.rendezVousList];
      },
      error => {
        console.error('Erreur lors du chargement des rendez-vous', error);
        this.toastr.error('Erreur lors du chargement des rendez-vous');
      }
    );
  }

  filterRendezVous(): void {
    this.filteredRendezVous = this.rendezVousList.filter(rdv => {
      const matchSearch = !this.searchTerm || 
        rdv.nomContact.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchStatus = !this.filterStatus || 
        rdv.statut === this.filterStatus;
      
      const matchDate = !this.filterDate || 
        this.formatDate(rdv.date) === this.filterDate;
        
      return matchSearch && matchStatus && matchDate;
    });
  }

  private formatDate(dateString: string): string {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  }

  toggleActionMenu(event: Event, id: string): void {
    event.stopPropagation();
    event.preventDefault();
    
    // Fermer tous les menus ouverts
    this.closeAllActionMenus();
    
    // Ouvrir le menu sélectionné
    const menuElement = document.getElementById(`action-menu-${id}`);
    if (menuElement) {
      if (this.activeMenuId === id) {
        menuElement.classList.remove('show');
        this.activeMenuId = null;
      } else {
        menuElement.classList.add('show');
        this.activeMenuId = id;
      }
    }
  }
  
  closeAllActionMenus(): void {
    const menus = document.querySelectorAll('.dropdown-menu');
    menus.forEach(menu => {
      menu.classList.remove('show');
    });
    this.activeMenuId = null;
  }

  openDeleteModal(rendezVous: RendezVous): void {
    this.selectedRendezVous = rendezVous;
    $('#delete_modal').modal('show');
    this.closeAllActionMenus();
  }

  deleteRendezVous(): void {
    if (!this.selectedRendezVous) return;
    
    this.rendezVousService.deleteRendezVous(this.selectedRendezVous.id).subscribe(
      () => {
        this.toastr.success('Rendez-vous supprimé avec succès');
        this.loadRendezVous();
        $('#delete_modal').modal('hide');
      },
      error => {
        console.error('Erreur lors de la suppression du rendez-vous', error);
        this.toastr.error('Erreur lors de la suppression du rendez-vous');
      }
    );
  }
}
