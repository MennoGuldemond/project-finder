import { Action, createReducer, on } from '@ngrx/store'
import * as JobOfferActions from '../actions/job-offer.actions';

import { IJobOffer } from '../../job-offers/models';

export interface JobOfferState {
  offers: IJobOffer[];
}

const initialState: JobOfferState = {
  offers: []
}

const jobOfferReducer = createReducer(
  initialState,
  on(JobOfferActions.getJobOffers, (state) => ({ ...state })),
  on(JobOfferActions.setJobOffers, (state, action: any) => {
    return ({ ...state, offers: action.payload })
  }),
  on(JobOfferActions.deleteJobOffer, (state, action: any) => {
    return ({
      ...state, offers: state.offers.filter((offer: IJobOffer) => {
        return offer._id !== action.id;
      })
    })
  })
);

export function reducer(state: JobOfferState | undefined, action: Action) {
  return jobOfferReducer(state, action);
}
