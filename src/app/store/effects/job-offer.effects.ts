import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

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
          return ({ type: '[Job Offers] setJobOffers', payload: jobOffers })
        }),
        catchError(() => EMPTY)
      ))
  ));

  deleteJobOffer$ = createEffect(() => this.actions$.pipe(
    ofType('[Job Offers] deleteJobOffer'),
    tap((action: any) => {
      console.log(action);
      this.jobOfferService.delete(action.id).subscribe();
    })
  ), { dispatch: false });



  // mergeMap((action: any) => this.jobOfferService.delete(action.id)
  //   .pipe(
  //     map(() => {
  //       return ({ type: '[Job Offers] deletedJobOffer', payload: action.id })
  //     }),
  //     catchError(() => EMPTY)
  //   ))
  // ));

}