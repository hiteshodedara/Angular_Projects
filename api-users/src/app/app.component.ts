import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Usermodel } from './models/usermodel';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
//   randomUser?:Usermodel;
//   refresh: boolean=false;



// ngOnInit() {
//   this.userservices.getuserdata().subscribe(data => {
//     this.randomUser = data;
//     console.log(this.randomUser);
//   });
// }

//   constructor(private userservices: UserserviceService) {}

//   getRandomUser() {
//     this.userservices.getuserdata().subscribe(data => {
//       this.randomUser = data;
//       console.log(this.randomUser);
//     });
//   }

//   isrefresh(){
//     this.refresh=!this.refresh;
//   }
}
