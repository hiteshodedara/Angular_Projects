import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl="http://localhost:3000/users"

  constructor(private https: HttpClient) { 
  }

  userregister(data:any){
    const ndata:User={
      name : data.name,
      email: data.email,
      password: data.password
    }
    return this.https.post(this.userUrl,ndata)
  }

  getalluser(){
    return this.https.get(this.userUrl);
  }
}
