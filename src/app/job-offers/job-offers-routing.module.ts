import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobOffersComponent } from './job-offers.component';
import { JobOfferEditComponent } from './components';

const routes: Routes = [
  { path: 'joboffers', component: JobOffersComponent },
  { path: 'joboffers/edit', component: JobOfferEditComponent },
  { path: 'joboffers/edit/:id', component: JobOfferEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class JobOffersRoutingModule { }