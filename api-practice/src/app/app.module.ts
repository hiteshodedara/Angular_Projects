import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstApiTestComponent } from './api-practice-pages/first-api-test/first-api-test.component';
import { ApiTest1Component } from './api-practice-pages/api-test1/api-test1.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstApiTestComponent,
    ApiTest1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
