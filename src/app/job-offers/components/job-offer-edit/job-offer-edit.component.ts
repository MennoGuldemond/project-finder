import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { JobOfferHttpService } from '../../services';
import { IJobOffer } from '../../models';

@Component({
  selector: 'app-job-offer-edit',
  templateUrl: './job-offer-edit.component.html',
  styleUrls: ['./job-offer-edit.component.scss']
})
export class JobOfferEditComponent implements OnInit {

  private urlPattern = '(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})';

  jobOffer: IJobOffer;
  jobOfferForm = new FormGroup({});

  constructor(
    private jobOfferService: JobOfferHttpService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        this.jobOfferService.getById(params.get('id')).subscribe(offer => {
          this.jobOffer = offer;
          this.buildForm();
        });
      } else {
        this.jobOffer = { _id: null, title: '', link: '', description: '', tags: []};
        this.buildForm();
      }
    });
  }

  buildForm(): void {
    this.jobOfferForm = this.formBuilder.group({
      title: [this.jobOffer.title, Validators.required],
      link: [this.jobOffer.link, Validators.compose([Validators.required, Validators.pattern(this.urlPattern)])],
      description: [this.jobOffer.description]
    });
  }

  save(): void {
    this.jobOffer.title = this.jobOfferForm.value.title;
    this.jobOffer.link = this.jobOfferForm.value.link;
    this.jobOffer.description = this.jobOfferForm.value.description;

    if (this.jobOffer._id) {
      this.jobOfferService.patch(this.jobOffer).subscribe(x => {
        this.router.navigate(['/joboffers']);
      });
    } else {
      this.jobOfferService.post(this.jobOffer).subscribe(x => {
        this.router.navigate(['/joboffers']);
      });
    }
  }
  
  delete(): void {
    if (this.jobOffer._id) {
      this.jobOfferService.delete(this.jobOffer).subscribe(x => {
        this.router.navigate(['/joboffers']);
      });
    }
  }

  removeTag(index: number): void {
    this.jobOffer.tags.splice(index, 1);
  }

  addTag(tagInput: any): void {
    const tag = tagInput.value;
    tagInput.value = '';

    if (tag && tag.length > 0) {
      this.jobOffer.tags.push(tag);
    }
  }

}
