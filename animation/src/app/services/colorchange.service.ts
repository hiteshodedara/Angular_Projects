import { Injectable } from '@angular/core';
import colornames = require('colornames');

@Injectable({
  providedIn: 'root'
})
export class ColorchangeService {

colors:string[]=[]

  getNextColor() {

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const colorName = this.rgbToColorName(r, g, b);

    this.colors.push(colorName)
    this.colors.push(`rgb(${r}, ${g}, ${b})`);
    return this.colors;
  }

   rgbToColorName(r: number, g: number, b: number): string {
    const colorRanges = [
      { name: 'red', min: 200, max: 255, component: r },
      { name: 'green', min: 200, max: 255, component: g },
      { name: 'blue', min: 200, max: 255, component: b }
      // Add more color ranges as needed
    ];
  
    for (const range of colorRanges) {
      if (range.component >= range.min && range.component <= range.max) {
        return range.name;
      }
    }
  
    return 'unknown';
  }
  
}
