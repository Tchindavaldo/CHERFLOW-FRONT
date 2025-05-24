import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AllModulesService } from '../../../services/all-modules.service';
import { ToastrService } from 'ngx-toastr';
import { Event } from '../event.model';
declare const $: any;

@Component({
  selector: 'app-view-estimate',
  templateUrl: './view-estimate.component.html',
  styleUrls: ['./view-estimate.component.css']
})
export class ViewEstimateComponent implements OnInit {
  event: Event | null = null;
  id: string;
  loading = false;
  error = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private allModulesService: AllModulesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id) {
      this.toastr.error('ID de l\'événement non trouvé');
      this.router.navigate(['/evenement/estimates-list']);
      return;
    }
    this.loadEventDetails();
  }

  loadEventDetails() {
    this.loading = true;
    this.error = false;
    
    this.allModulesService.getEstimate(this.id).subscribe(
      (data: Event) => {
        this.event = data;
        this.loading = false;
      },
      error => {
        this.error = true;
        this.loading = false;
        this.toastr.error('Événement non trouvé');
        this.router.navigate(['/evenement/estimates-list']);
      }
    );
  }

  onEdit() {
    if (this.id) {
      this.router.navigate(['/evenement/edit-estimates', this.id]);
    }
  }

  openDeleteModal() {
    $('#delete_estimate').modal('show');
  }

  deleteEvent() {
    if (!this.id) return;

    this.allModulesService.deleteEstimate(this.id).subscribe(
      () => {
        $('#delete_estimate').modal('hide');
        this.toastr.success('Événement supprimé avec succès');
        this.router.navigate(['/evenement/estimates-list']);
      },
      error => {
        this.toastr.error('Erreur lors de la suppression de l\'événement');
        console.error('Error:', error);
      }
    );
  }
}
