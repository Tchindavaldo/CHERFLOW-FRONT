import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RendezVousService } from '../rendez-vous.service';
import { RendezVous } from '../rendez-vous.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modifier-rendez-vous',
  templateUrl: './modifier-rendez-vous.component.html',
  styleUrls: ['./modifier-rendez-vous.component.css']
})
export class ModifierRendezVousComponent implements OnInit {
  modifierForm: FormGroup;
  loading: boolean = true;
  error: boolean = false;
  isSubmitting: boolean = false;
  rendezVousId: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private rendezVousService: RendezVousService,
    private toastr: ToastrService
  ) {
    this.modifierForm = this.fb.group({
      nomContact: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      date: ['', [Validators.required]],
      heure: ['', [Validators.required]],
      statut: ['En attente', [Validators.required]],
      notes: ['']
    });
  }

  ngOnInit(): void {
    this.rendezVousId = this.route.snapshot.paramMap.get('id') || '';
    if (!this.rendezVousId) {
      this.error = true;
      this.loading = false;
      this.toastr.error('Identifiant de rendez-vous manquant');
      return;
    }

    this.loadRendezVous();
  }

  loadRendezVous(): void {
    this.rendezVousService.getRendezVousById(this.rendezVousId).subscribe(
      (rendezVous) => {
        // Formater la date pour le champ input date
        const date = new Date(rendezVous.date);
        const formattedDate = date.toISOString().split('T')[0];
        
        this.modifierForm.patchValue({
          nomContact: rendezVous.nomContact,
          email: rendezVous.email,
          telephone: rendezVous.telephone,
          date: formattedDate,
          heure: rendezVous.heure,
          statut: rendezVous.statut,
          notes: rendezVous.notes || ''
        });
        
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

  onSubmit(): void {
    if (this.modifierForm.invalid) {
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.modifierForm.controls).forEach(key => {
        const control = this.modifierForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    
    this.rendezVousService.updateRendezVous(this.rendezVousId, this.modifierForm.value).subscribe(
      (response) => {
        this.toastr.success('Rendez-vous mis à jour avec succès');
        this.router.navigate(['/rendezvous/voir', this.rendezVousId]);
        this.isSubmitting = false;
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du rendez-vous', error);
        this.toastr.error('Erreur lors de la mise à jour du rendez-vous');
        this.isSubmitting = false;
      }
    );
  }

  annuler(): void {
    this.router.navigate(['/rendezvous/voir', this.rendezVousId]);
  }
}
