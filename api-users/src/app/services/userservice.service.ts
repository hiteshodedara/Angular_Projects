import { Injectable } from '@angular/core';
import { Usermodel } from '../models/usermodel';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  userdit!:Usermodel;
  apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient) { }

  getuserdata(): Observable<Usermodel> {
    return this.http.get<any>(this.apiUrl)
      .pipe(map(data => {
        const user = data.results[0];
        console.log(user);
        
        return {
          username: {
            firstname: user.name.first,
            lastname: user.name.last,
            surename: user.name.title
          },
          dob: {
            age: user.dob.age,
            date: user.dob.date
          },
          gender: user.gender,
          email: user.email,
          price:Math.floor(Math.random()*10000),
          phone: user.phone.replace(/[-() ]/g, ''),
          imageurl: user.picture.medium
          ,
          address: {
            city: user.location.city,
            country: user.location.country,
            pincode: user.location.postcode,
            state: user.location.state
          }
        } as Usermodel;
      }));
  }
}
