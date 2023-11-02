import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbtable',
  templateUrl: './mbtable.component.html',
  styleUrls: ['./mbtable.component.css']
})
export class MbtableComponent implements OnInit{
  cval:number[]=[];
  datalist=[
    {value:1048576,type:'byte'},
    {value:1024,type:'kb'},
    {value:1048576,type:'byte'},
    {value:1024,type:'kb'},
  ]

num=20;
ngOnInit() {
  for(let i=0 ;i<=this.datalist.length;i++){
    const item=this.datalist[i];
    if(item.type=='kb'){
      const val=Math.round(item.value/1024)
      this.cval.push(val) 
    }else{
      const val=Math.round(item.value/(1024 * 1024));
      this.cval.push(val);
    }
  }
  console.log(this.cval);
  
}





}
