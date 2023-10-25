import { Component } from '@angular/core';

@Component({
  selector: 'app-first-api-test',
  templateUrl: './first-api-test.component.html',
  styleUrls: ['./first-api-test.component.css']
})
export class FirstApiTestComponent {
  showmaincard: boolean = false;
  showsubcard: boolean = false;
  // Define the API endpoint
  apiUrl = 'https://randomuser.me/api/';
  test1: any;
  randomUser: any;
  userinfo?: any;
  idlist:any;

  constructor() {
  }
  onclick() {
    this.showmaincard = true;
    fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        this.randomUser = data.results[0];

        let user: object = {
          uname: {
            title: this.randomUser.name.title,
            firstname: this.randomUser.name.first,
            lastname: this.randomUser.name.last
          },
          age: this.randomUser.dob.age,
          pnumber: this.randomUser.phone.replace(/-/g, '').replace(/[()]/g, '').replace(/' '/g, ''),
          email: this.randomUser.email,
          pic: this.randomUser.picture.large,
          gender: this.randomUser.gender,
          address: {
            contry: this.randomUser.location.country,
            city: this.randomUser.location.city,
            pincode: this.randomUser.location.postcode

          }
        }

        this.userinfo = user

       
        
      })
      .catch(error => console.error('Error:', error));

  }
  onclickadd() {
    this.showsubcard = true;

    this.test1=this.userinfo

  }
}
