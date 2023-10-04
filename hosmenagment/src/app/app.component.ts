import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hosmenagment';
  name2:String="";
  email:String="";
  onclick(){
    alert("you name is :"+this.name2+"\n"+"this is you email:"+thisemail);  
  }
}
