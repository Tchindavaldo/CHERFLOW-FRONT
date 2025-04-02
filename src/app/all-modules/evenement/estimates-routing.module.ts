import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from 'src/app/core/auth/authentication.guard';
import { AddEstimatesComponent } from './add-estimates/add-estimates.component';
import { EditEstimateComponent } from './edit-estimate/edit-estimate.component';
import { EstimatesListComponent } from './estimates-list/estimates-list.component';
import { EstimatesComponent } from './estimates.component';
import { ViewEstimateComponent } from './view-estimate/view-estimate.component';

const routes: Routes = [
  {
    path: '',
    component: EstimatesComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: "estimates-list", component: EstimatesListComponent },
      { path: "add-estimates", component: AddEstimatesComponent },
      { path: "edit-estimates/:id", component: EditEstimateComponent },
      { path: "view-estimates/:id", component: ViewEstimateComponent },
      { path: '', redirectTo: 'estimates-list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimatesRoutingModule { }
