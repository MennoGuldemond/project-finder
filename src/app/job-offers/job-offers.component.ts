import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IJobOffer } from './models';

import { getJobOffers } from '../store/actions/job-offer.actions';
import { State } from '../store/reducers';

@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss']
})
export class JobOffersComponent implements OnInit {

  jobOffers$: Observable<IJobOffer[]>;

  constructor(private store: Store<State>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch(getJobOffers());
    
    this.jobOffers$ = this.store.pipe(
      map(state => state.jobOffers.offers)
    );
  }

  addJobOffer(): void {
    this.router.navigate([`/joboffers/edit/`]);
  }

}
