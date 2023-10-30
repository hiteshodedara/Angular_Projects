import { Component,Input } from '@angular/core';
import { Usermodel } from '../model/usermodel';

@Component({
  selector: 'app-userlists',
  templateUrl: './userlists.component.html',
  styleUrls: ['./userlists.component.css']
})
export class UserlistsComponent {
  @Input() item: Usermodel | undefined;
  userlist: Usermodel[] = []; 
  onclickadd(items:any) {
    if (this.item && !this.userlist.some(user => user.email === items.email)) {
      this.userlist.push(items);
    }
  else{
    alert("this is same data")
  }
  }
  onclickdelete(item: Usermodel) {
    const index = this.userlist.indexOf(item);
    if (index !== -1) {
      this.userlist.splice(index, 1);
    }
  }
}
