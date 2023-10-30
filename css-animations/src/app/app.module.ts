import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FanComponent } from './fan/fan.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { BootstrpatestComponent } from './bootstrpatest/bootstrpatest.component';

@NgModule({
  declarations: [
    AppComponent,
    FanComponent,
    EventsComponent,
    BootstrpatestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
