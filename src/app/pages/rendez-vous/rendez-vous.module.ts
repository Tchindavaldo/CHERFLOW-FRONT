import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RendezVousComponent } from './rendez-vous.component';
import { NouveauRendezVousComponent } from './nouveau-rendez-vous/nouveau-rendez-vous.component';
import { ModifierRendezVousComponent } from './modifier-rendez-vous/modifier-rendez-vous.component';
import { VoirRendezVousComponent } from './voir-rendez-vous/voir-rendez-vous.component';

// Import pour la localisation française
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// Enregistrement de la locale française
registerLocaleData(localeFr);

const routes: Routes = [
  { path: 'list', component: RendezVousComponent },
  { path: 'nouveau', component: NouveauRendezVousComponent },
  { path: 'modifier/:id', component: ModifierRendezVousComponent },
  { path: 'voir/:id', component: VoirRendezVousComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    RendezVousComponent,
    NouveauRendezVousComponent,
    ModifierRendezVousComponent,
    VoirRendezVousComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ]
})
export class RendezVousModule { } 