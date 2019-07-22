import { createAction, props } from '@ngrx/store';
import { IJobOffer } from '../../job-offers/models';

export const getJobOffers = createAction('[Job Offers] getJobOffers');
export const saveJobOffers = createAction('[Job Offers] saveJobOffers', props<IJobOffer[]>());
