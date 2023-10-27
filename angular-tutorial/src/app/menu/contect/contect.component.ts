import { Component } from '@angular/core';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.css']
})
export class ContectComponent {
uname!: string;
password!: string;
number!: string;

onclick(){
  if(this.uname!=='' && this.password!=='' && this.number!==''){
    window.alert("I will Response Soon Thank You for Message..");
    this.uname=''
    this.password=''
    this.number=''
  }else{
    window.alert("Server Have Some Problem...Sorry!");
    this.uname=''
    this.password=''
    this.number=''
  }
}
}
