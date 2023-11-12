import { Component, Input, OnInit } from '@angular/core';
import { TodolistService } from '../services/todolist.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  oplist: any;
  @Input() dataval: any;
  selectedvalue: any;
  itemslist: any = []


  constructor(private sservice: TodolistService) {
    sservice.gettodolists().subscribe(res => {
      this.selectedvalue = this.dataval.key
      this.oplist = res
    })


  }

  ngOnInit(): void {
    const dbstore = localStorage.getItem('TodoDB')
    const curruntitemname = this.dataval.key

    if (dbstore != null) {
      const inputArray = JSON.parse(dbstore);
      this.itemslist = inputArray.filter((item: { key: string; }) => item.key === curruntitemname);
    }



  }

  ondelete(id: any) {

    console.log('id', id);
    const dbdata = localStorage.getItem('TodoDB')
    if (dbdata != null) {
      const data = JSON.parse(dbdata)
      const newData = data.filter((item: { id: any }) => item.id !== id);
      localStorage.setItem('TodoDB', JSON.stringify(newData))

    }
    window.location.reload();
  }

  onupdate(id: any) {
    const todata = this.selectedvalue;

    const data = localStorage.getItem('TodoDB');

    if (data != null) {
      const data2 = JSON.parse(data);

      const indexToUpdate = data2.findIndex((item: { id: any }) => item.id === id);
      console.log('idtoupdate', indexToUpdate);

      if (indexToUpdate !== -1) {
        data2[indexToUpdate].key = todata;
        data2[indexToUpdate].isNew = todata;
        console.log('data:', data2);
        localStorage.setItem('TodoDB', JSON.stringify(data2));
        window.location.reload();
      }
    }
  }










}
