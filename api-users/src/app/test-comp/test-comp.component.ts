import { Component } from '@angular/core';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCompComponent {

  userEmail!:string;
  userName!:string;
  pNumber!:number;
  userDe!:string;
clickMessage:any;

  onclick(event: KeyboardEventInit){
    if(this.userName,this.pNumber,this.userEmail){
      console.log(this.userEmail);
      console.log(this.userName);
      console.log(this.pNumber);
      console.log(this.userDe);
    }else{
      console.log('Enter All Values');
      
    }

    
  }

}
