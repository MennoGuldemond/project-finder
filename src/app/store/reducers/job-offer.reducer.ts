import { Action, createReducer, on } from '@ngrx/store'
import * as JobOfferActions from '../actions/job-offer.actions';

import { IJobOffer } from '../../job-offers/models';
import * as fromRoot from './index';

export interface JobOfferState {
  offers: IJobOffer[];
}

const initialState: JobOfferState = {
  offers: []
}

const jobOfferReducer = createReducer(
  initialState,
  on(JobOfferActions.getJobOffers, (state) => ({ ...state })),
  on(JobOfferActions.saveJobOffers, (state, x: any) => {
    return ({ ...state, offers: x.payload })
  })
);

export function reducer(state: JobOfferState | undefined, action: Action) {
  return jobOfferReducer(state, action);
}
