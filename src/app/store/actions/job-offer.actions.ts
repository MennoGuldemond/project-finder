import { createAction, props } from '@ngrx/store';
import { IJobOffer } from '../../job-offers/models';

export const getJobOffers = createAction('[Job Offers] getJobOffers');
export const setJobOffers = createAction('[Job Offers] setJobOffers', props<IJobOffer[]>());
export const deleteJobOffer = createAction('[Job Offers] deleteJobOffer', props<{ id: string }>());
