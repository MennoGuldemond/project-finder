import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';

import { SharedModule } from './shared.module';
import { JobOfferModule } from './job-offers';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    JobOfferModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
