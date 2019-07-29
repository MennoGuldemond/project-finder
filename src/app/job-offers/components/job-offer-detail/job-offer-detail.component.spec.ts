import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferDetailComponent } from './job-offer-detail.component';
import { SharedModule } from 'src/app/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('JobOfferDetailComponent', () => {
  let component: JobOfferDetailComponent;
  let fixture: ComponentFixture<JobOfferDetailComponent>;

  const initialState = { jobOffers: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [JobOfferDetailComponent],
      providers: [
        provideMockStore({ initialState })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
