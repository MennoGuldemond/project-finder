import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IJobOffer } from '../../models';

@Component({
  selector: 'job-offer-detail',
  templateUrl: './job-offer-detail.component.html',
  styleUrls: ['./job-offer-detail.component.scss']
})
export class JobOfferDetailComponent {

  constructor(private router: Router) { }

  @Input() jobOffer: IJobOffer;

  editJobOffer(): void {
    this.router.navigate([`/joboffers/edit/${this.jobOffer._id}`]);
  }

}
