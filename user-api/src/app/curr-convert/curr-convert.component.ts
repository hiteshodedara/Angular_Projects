import { Component } from '@angular/core';

@Component({
  selector: 'app-curr-convert',
  templateUrl: './curr-convert.component.html',
  styleUrls: ['./curr-convert.component.css']
})
export class CurrConvertComponent {
  op1!:number;
  op2!:number;

  isfocus(num:number) {
  if(num!==null){
    this.op2=Math.round(num/83)
  }else{
    console.log('no');
    
  }
   
  }
  isfocus2(num:number) {
    
    if(num!==null){
      this.op1=Math.round(num*83)
    }else{
      console.log('no');
      
    }
     
  }

}
