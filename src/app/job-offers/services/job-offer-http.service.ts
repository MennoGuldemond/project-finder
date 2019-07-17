import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IJobOffer } from '../models';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class JobOfferHttpService {

  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  getAll(): Observable<IJobOffer[]> {
    return this.http.get<IJobOffer[]>(`${this.baseUrl}/jobOffer`);
  }

  getById(id: string): Observable<IJobOffer> {
    return this.http.get<IJobOffer>(`${this.baseUrl}/jobOffer/${id}`);
  }

  post(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http.post<IJobOffer>(`${this.baseUrl}/jobOffer`, jobOffer);
  }

  patch(jobOffer: IJobOffer): Observable<IJobOffer> {
    return this.http.patch<IJobOffer>(`${this.baseUrl}/jobOffer/${jobOffer._id}`, jobOffer);
  }

  delete(jobOffer: IJobOffer): Observable<void> {
    return this.http.delete(`${this.baseUrl}/joboffer/${jobOffer._id}`).pipe(map(x => {
      return;
    }));
  }

  searchByTag(tag: string): Observable<IJobOffer> {
    return this.http.get<IJobOffer>(`${this.baseUrl}/joboffer/tag/${tag}`);
  }

}
