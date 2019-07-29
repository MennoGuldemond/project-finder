import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

import { MaterialModule } from './material.module'; 
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  exports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatMenuModule
  ]
})
export class SharedModule { }
