import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{AddRestoComponent}from './add-resto/add-resto.component';
import{ListRestoComponent}from './list-resto/list-resto.component';
import{LoginComponent}from './login/login.component';
import{UpdateRestoComponent}from './update-resto/update-resto.component';
import{RegisterComponent}from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"add",component:AddRestoComponent},
  {path:"update/:id",component:UpdateRestoComponent},
  {path:"list",component:ListRestoComponent},
  {path:"home",component:HomeComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"**",component:ErrorpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
