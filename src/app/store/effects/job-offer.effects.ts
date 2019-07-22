import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { JobOfferHttpService } from '../../job-offers/services/job-offer-http.service';

@Injectable()
export class JobOfferEffects {

  constructor(
    private actions$: Actions,
    private jobOfferService: JobOfferHttpService
  ) { }

  loadJobOffers$ = createEffect(() => this.actions$.pipe(
    ofType('[Job Offers] getJobOffers'),
    mergeMap(() => this.jobOfferService.getAll()
      .pipe(
        map(jobOffers => {
          return ({ type: '[Job Offers] saveJobOffers', payload: jobOffers })
        }),
        catchError(() => EMPTY)
      ))
  ));

}