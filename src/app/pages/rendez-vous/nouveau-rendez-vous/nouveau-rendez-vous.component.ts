import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RendezVousService } from '../rendez-vous.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nouveau-rendez-vous',
  templateUrl: './nouveau-rendez-vous.component.html',
  styleUrls: ['./nouveau-rendez-vous.component.css']
})
export class NouveauRendezVousComponent implements OnInit {
  rendezVousForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private rendezVousService: RendezVousService,
    private toastr: ToastrService
  ) {
    this.rendezVousForm = this.fb.group({
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
  }

  onSubmit(): void {
    if (this.rendezVousForm.invalid) {
      // Marque tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.rendezVousForm.controls).forEach(key => {
        const control = this.rendezVousForm.get(key);
        control?.markAsTouched();
      });
      this.toastr.error('Veuillez remplir correctement tous les champs obligatoires');
      return;
    }

    this.loading = true;
    this.rendezVousService.createRendezVous(this.rendezVousForm.value)
      .subscribe(
        (response) => {
          this.toastr.success('Rendez-vous créé avec succès');
          this.router.navigate(['/rendezvous/list']);
        },
        (error) => {
          console.error('Erreur lors de la création du rendez-vous', error);
          this.toastr.error('Erreur lors de la création du rendez-vous');
          this.loading = false;
        }
      );
  }

  // Getters pour accéder facilement aux contrôles du formulaire dans le template
  get nomContact() { return this.rendezVousForm.get('nomContact'); }
  get email() { return this.rendezVousForm.get('email'); }
  get telephone() { return this.rendezVousForm.get('telephone'); }
  get date() { return this.rendezVousForm.get('date'); }
  get heure() { return this.rendezVousForm.get('heure'); }
  get statut() { return this.rendezVousForm.get('statut'); }
}
