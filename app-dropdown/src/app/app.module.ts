import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { DivFlexesComponent } from './div-flexes/div-flexes.component';
import { ApiDataFatchComponent } from './api-data-fatch/api-data-fatch.component';
import { FirstApiCallComponent } from './api-practice/first-api-call/first-api-call.component';

@NgModule({
  declarations: [
    AppComponent,
    DropDownComponent,
    DivFlexesComponent,
    ApiDataFatchComponent,
    FirstApiCallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
