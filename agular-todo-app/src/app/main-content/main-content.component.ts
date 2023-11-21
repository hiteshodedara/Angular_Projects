import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';
import { interval, pipe } from 'rxjs';
import { DatastoreService } from '../services/datastore.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  blocks:any=[]
  todos:any= [];
  localitem:any;
  constructor(private lservice:TodolistService,private locals:DatastoreService){
   lservice.gettodolists().subscribe((data) => {
     
      data.sort((a, b) => a.index - b.index)
     this.blocks=data.map(res=>res.name)
    })
   
    this.localitem=localStorage.getItem('Todo')
    if (this.localitem == null) {
      this.todos = []
    }
    else {
      this.todos = JSON.parse(this.localitem);
    }
    console.log(this.localitem);
    
  }

ngOnInit() {
  
}



data:any =[]

onsubmit(todo:any){
  
  this.data.push(todo);
  localStorage.setItem("Todo", JSON.stringify(this.data));
 
}
}
