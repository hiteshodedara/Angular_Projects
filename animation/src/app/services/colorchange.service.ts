import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ColorchangeService {
  private apiUrl = 'https://www.thecolorapi.com/id?rgb=';

  constructor(private http: HttpClient) { }

  getColorInfo(rgb: string){
    return this.http.get<any>(`${this.apiUrl}${rgb}`).pipe(
      map(res => res.name.value)
    );
  }

  getNextColor(): Observable<string[]> {
    const r = Math.floor(Math.random() * 256),
          g = Math.floor(Math.random() * 256),
          b = Math.floor(Math.random() * 256);

    return this.getColorInfo(`(${r},${g},${b})`).pipe(
      map(colorName => [colorName, `rgb(${r}, ${g}, ${b})`])
    );
  }
}
