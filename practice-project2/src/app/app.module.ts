import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MbtableComponent } from './mbtable/mbtable.component';
import { GetdataDirective } from './directiv/getdata.directive';
import { MbpipeComponent } from './mbpipe/mbpipe.component';
import { SconvtorPipe } from './pips/sconvtor.pipe';
import { ObjectswapComponent } from './objectswap/objectswap.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MbtableComponent,
    GetdataDirective,
    MbpipeComponent,
    SconvtorPipe,
    ObjectswapComponent
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
