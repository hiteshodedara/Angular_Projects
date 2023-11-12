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

  blocks: any;
  dbdata: any;


  inputdata = ''

  obj = {
    key: 'todo',
    id: Math.random(),
    value: ''
  }

  constructor(private lservice: TodolistService, private locals: DatastoreService) {
    lservice.gettodolists().subscribe((data) => {
      data.sort((a, b) => a.index - b.index)
      this.blocks = data.map(res => res)
    })

    const storedata = localStorage.getItem('TodoDB')
    if (storedata != null) {
      this.dbdata = JSON.parse(storedata);
    }
  }

  ngOnInit() {

  }

  onaddtodo() {
    this.obj.value = this.inputdata
    this.dbdata.push(this.obj)
    localStorage.setItem('TodoDB', JSON.stringify(this.dbdata))
    this.inputdata = ''
    window.location.reload();


  }



}
