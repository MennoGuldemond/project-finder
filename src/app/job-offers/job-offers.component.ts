import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { JobOfferHttpService } from './services';
import { IJobOffer } from './models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {

  jobOffers$: Observable<IJobOffer[]>;

  constructor(private jobOfferService: JobOfferHttpService, private router: Router) { }

  ngOnInit() {
    this.jobOffers$ = this.jobOfferService.getAll();
  }

  addJobOffer(): void {
    this.router.navigate([`/joboffers/edit/`]);
  }

}
