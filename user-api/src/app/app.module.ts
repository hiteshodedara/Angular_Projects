import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdtailsComponent } from './user/userdtails/userdtails.component';
import { UserlistsComponent } from './user/userlists/userlists.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrConvertComponent } from './curr-convert/curr-convert.component';


@NgModule({
  declarations: [
    AppComponent,
    UserdtailsComponent,
    UserlistsComponent,
    CurrConvertComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
