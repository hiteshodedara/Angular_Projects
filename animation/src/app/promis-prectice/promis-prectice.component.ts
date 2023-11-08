import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, ReplaySubject, map } from 'rxjs';

@Component({
  selector: 'app-promis-prectice',
  templateUrl: './promis-prectice.component.html',
  styleUrls: ['./promis-prectice.component.css']
})
export class PromisPrecticeComponent implements OnInit {


  private apiUrl = 'https://www.thecolod?rgb=';

  constructor(private http: HttpClient) { }

  async getColorInfo(rgb: string){
    return this.http.get(`${this.apiUrl}${rgb}`)
  }




   hello(){

    let bro=new Promise((resolve,reject)=>{
      const boll=false
      if(boll){
        resolve("this work is done")
      }
      reject("work is not complite wait")
    })

    return bro
  }

  ngOnInit(): void {
  

   this.getColorInfo('(255,0,0)').then(res=>{
    console.log("resolve: ",res);
    
   }).catch(res=>{
    console.error("reject: ",res);
   })
    
    
  }


  
    
}
