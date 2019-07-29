import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { State } from '../../../store/reducers';
import { deleteJobOffer } from '../../../store/actions/job-offer.actions';

import { IJobOffer } from '../../models';


@Component({
  selector: 'job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.scss']
})
export class JobOfferDetailComponent {

  constructor(private store: Store<State>, private router: Router) { }

  @Input() jobOffer: IJobOffer;

  editJobOffer(): void {
    this.router.navigate([`/joboffers/edit/${this.jobOffer._id}`]);
  }

  deleteJobOffer(): void {
    this.store.dispatch(deleteJobOffer({ id: this.jobOffer._id }));
  }

}
