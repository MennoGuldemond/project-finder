import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class MaterialModule { }
