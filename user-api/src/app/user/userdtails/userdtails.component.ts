import { Component } from '@angular/core';
import { UserservicesService } from '../services/userservices.service';
import { Usermodel } from '../model/usermodel';

@Component({
  selector: 'app-userdtails',
  templateUrl: './userdtails.component.html',
  styleUrls: ['./userdtails.component.css']
})
export class UserdtailsComponent {
  randomUser?:Usermodel;
  refresh: boolean=false;
  
  constructor(private userservices: UserservicesService) {}

  getRandomUser() {
    this.userservices.getuserdata().subscribe(data => {
      this.randomUser = data;
      console.log(this.randomUser);
    });
  }

  isrefresh(){
    this.refresh=!this.refresh;
  }
}
