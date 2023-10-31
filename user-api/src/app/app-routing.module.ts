import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdtailsComponent } from './user/userdtails/userdtails.component';
import { CurrConvertComponent } from './curr-convert/curr-convert.component';
import { PaymentComponent } from './user/payment/payment.component';

const routes: Routes = [
  {
    path: 'Userapi',
    component: UserdtailsComponent,
    children: [{ path: 'payment/:id', component: PaymentComponent }]
  },
  {path:'curr',component:CurrConvertComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
