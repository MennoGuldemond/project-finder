import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as fromJobOffers from './job-offer.reducer';

export interface State {
  jobOffers: fromJobOffers.JobOfferState
}

export const reducers: ActionReducerMap<State> = {
  jobOffers: fromJobOffers.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
