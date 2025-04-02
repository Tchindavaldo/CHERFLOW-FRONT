import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AllModulesService } from '../../../services/all-modules.service';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from "@angular/common";
// import * as $ from 'jquery';
declare const $: any;

@Component({
  selector: 'app-add-estimates',
  templateUrl: './add-estimates.component.html',
  styleUrls: ['./add-estimates.component.css']
})
export class AddEstimatesComponent implements OnInit {
  public url: any = "events";
  public addEventForm!: FormGroup;
  public submitted = false;
  public pipe = new DatePipe("fr-FR");

  constructor(
    public router: Router, 
    private location: Location, 
    private allModulesService: AllModulesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.addEventForm = this.formBuilder.group({
      titre: ["", [Validators.required]],
      date: ["", [Validators.required]],
      heureDebut: ["12:00"],
      heureFin: ["12:15"],
      dureeType: ["journee"],
      frequentation: ["", [Validators.required]],
      visibilite: ["", [Validators.required]],
      localisation: [""]
    });

    // Initialisation des composants UI si nécessaire
    setTimeout(() => {
      $('.select2').select2();
    }, 300);
  }

  // Getter pour un accès facile aux contrôles du formulaire
  get f() { 
    return this.addEventForm.controls; 
  }

  addEvent() {
    this.submitted = true;

    // Arrêter ici si le formulaire est invalide
    if (this.addEventForm.invalid) {
      return;
    }

    // Préparation des données pour envoyer au serveur
    const formValues = this.addEventForm.value;
    
    // Formatage de la date si nécessaire
    const eventDate = new Date(formValues.date);
    const formattedDate = this.pipe.transform(eventDate, "dd/MM/yyyy");

    // Création de l'objet événement
    let eventObj = {
      titre: formValues.titre,
      date: formattedDate,
      heure_debut: formValues.heureDebut,
      heure_fin: formValues.heureFin,
      journee_entiere: formValues.dureeType === 'journee',
      frequentation: formValues.frequentation,
      visibilite: formValues.visibilite,
      localisation: formValues.localisation,
      status: "À venir"
    };

    // Envoi des données au service
    this.allModulesService.add(eventObj, this.url).subscribe({
      next: (data) => {
        this.toastr.success("Événement ajouté avec succès !", "Succès");
        this.router.navigate(["/evenement/estimates-list"]);
      },
      error: (error) => {
        this.toastr.error("Une erreur est survenue lors de l'ajout de l'événement", "Erreur");
      }
    });
  }
  // deleteModal(template: TemplateRef<any>, special) {
  // }

}
