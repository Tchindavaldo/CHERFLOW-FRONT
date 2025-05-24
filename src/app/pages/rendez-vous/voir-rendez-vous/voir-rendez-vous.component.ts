import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVousService } from '../rendez-vous.service';
import { RendezVous } from '../rendez-vous.model';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-voir-rendez-vous',
  templateUrl: './voir-rendez-vous.component.html',
  styleUrls: ['./voir-rendez-vous.component.css']
})
export class VoirRendezVousComponent implements OnInit {
  rendezVous: RendezVous | null = null;
  loading: boolean = true;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private rendezVousService: RendezVousService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadRendezVousDetails();
  }

  loadRendezVousDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = true;
      this.loading = false;
      this.toastr.error('Identifiant de rendez-vous manquant');
      return;
    }

    this.rendezVousService.getRendezVousById(id).subscribe(
      (data) => {
        this.rendezVous = data;
        this.loading = false;
      },
      (error) => {
        console.error('Erreur lors du chargement du rendez-vous', error);
        this.error = true;
        this.loading = false;
        this.toastr.error('Impossible de charger les détails du rendez-vous');
      }
    );
  }

  onEdit(): void {
    if (this.rendezVous) {
      this.router.navigate(['/rendezvous/modifier', this.rendezVous.id]);
    }
  }

  openDeleteModal(): void {
    $('#delete_modal').modal('show');
  }

  deleteRendezVous(): void {
    if (!this.rendezVous) return;
    
    this.rendezVousService.deleteRendezVous(this.rendezVous.id).subscribe(
      () => {
        this.toastr.success('Rendez-vous supprimé avec succès');
        $('#delete_modal').modal('hide');
        this.router.navigate(['/rendezvous/list']);
      },
      (error) => {
        console.error('Erreur lors de la suppression du rendez-vous', error);
        this.toastr.error('Erreur lors de la suppression du rendez-vous');
      }
    );
  }
}
