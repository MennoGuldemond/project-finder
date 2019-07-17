import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOffersComponent } from './job-offers.component';
import { SharedModule } from '../shared.module';
import { JobOfferDetailComponent } from './components';

describe('JobOffersComponent', () => {
  let component: JobOffersComponent;
  let fixture: ComponentFixture<JobOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [
        JobOffersComponent,
        JobOfferDetailComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
