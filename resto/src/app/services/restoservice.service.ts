import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoserviceService {
  url = "http://localhost:3000/restourants"

  constructor(private https: HttpClient) { }

  getrestodata(){
    return this.https.get(this.url)
  }
  addrestodata(data:any){
    return this.https.post(this.url,data)
  }

  deleteresto(id:number){
    return this.https.delete(`${this.url}/${id}`)
  }
  getonerestodata(id:number){
    return this.https.get(`${this.url}/${id}`)
  }
  editeresodata(id:number,data:any){
    return this.https.put(`${this.url}/${id}`,data)
  }

}
