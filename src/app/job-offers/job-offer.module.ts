import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { JobOfferHttpService } from './services';
import { JobOffersComponent } from './job-offers.component';
import { JobOffersRoutingModule } from './job-offers-routing.module';
import { JobOfferDetailComponent, JobOfferEditComponent } from './components';

@NgModule({
  declarations: [
    JobOffersComponent,
    JobOfferDetailComponent,
    JobOfferEditComponent
  ],
  imports: [
    JobOffersRoutingModule,
    SharedModule
  ],
  providers: [
    JobOfferHttpService
  ],
})
export class JobOfferModule { }
