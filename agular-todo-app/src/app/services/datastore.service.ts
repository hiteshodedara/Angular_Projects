import { Injectable, OnInit } from '@angular/core';
import { TodolistService } from './todolist.service';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService implements OnInit{
  localitem: string | null | undefined;

  constructor(private slist: TodolistService) {
    
  }

ngOnInit(){
    
    
}
todos:any=[]
  addtodo(todo:any) {
    
  }

}
