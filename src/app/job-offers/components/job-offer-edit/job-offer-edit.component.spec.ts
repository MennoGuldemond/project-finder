import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOfferEditComponent } from './job-offer-edit.component';
import { SharedModule } from 'src/app/shared.module';

describe('JobOfferEditComponent', () => {
  let component: JobOfferEditComponent;
  let fixture: ComponentFixture<JobOfferEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ JobOfferEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOfferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
