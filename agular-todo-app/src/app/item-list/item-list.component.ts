import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit{

  @Input() vals:any;


  
  ngOnInit(): void {
    
  }

constructor(){
  
}

















//   val=[
//     {key:"todo",value:{Uname:"hitesh",task:"do code bugs..",discrip:"have this code fix this"}},
//     {key:"todo",value:{Uname:"dipen",task:"find bug",discrip:"3 bugs here"}},
//     {key:"complete",value:{Uname:"hitesh",task:"all Bug Fix",discrip:"have this code fix this"}},
//     {key:"complete",value:{Uname:"dipen",task:"Try One More Bug",discrip:"have this code fix this"}},
//     {key:"progress",value:{Uname:"hitesh",task:"do code bugs..",discrip:"have this code fix this"}},
//     {key:"progress",value:{Uname:"dipen",task:"do code bugs..",discrip:"have this code fix this"}},
// ]

// constructor(){
//   const values=JSON.stringify(this.val);

//   localStorage.setItem('TodoDB',values)

//   const ans=localStorage.getItem('TodoDB')

//   if(ans!==null){
//     const val2=JSON.parse(ans)
//     console.log(val2);
    
//   }
// }




}
