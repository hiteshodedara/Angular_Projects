import { Component, Input } from '@angular/core';
import { Usermodel } from '../models/usermodel';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {
@Input() adduser:Usermodel | undefined;
storedObjects: Usermodel[] = [];

storeObject() {
  if(this.adduser){

    this.storedObjects.push(this.adduser);
  }
}
}
