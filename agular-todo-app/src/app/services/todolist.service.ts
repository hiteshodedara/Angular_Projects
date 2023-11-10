import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  private configUrl = 'assets/config.json'; 

  constructor(private http:HttpClient) { }

  gettodolists():Observable<any[]> {
    return this.http.get<any[]>(this.configUrl);
  }
}
