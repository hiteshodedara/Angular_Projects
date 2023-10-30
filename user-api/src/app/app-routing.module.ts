import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdtailsComponent } from './user/userdtails/userdtails.component';

const routes: Routes = [
  { path: 'Userapi', component: UserdtailsComponent},
  // { path: 'about', component:  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
