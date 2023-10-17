import { Component } from '@angular/core';
import { delay, of } from 'rxjs';
// import { delay } from 'rxjs/operators';
// import { promisify } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  currentColor: string = 'black';
  colors: string[] = [
  'red',
  'green',
  'blue',
  'yellow',
  'purple',
  'orange',
  'pink',
  'brown',
  'cyan',
  'magenta',
  'teal',
  'lime',
  'indigo',
  'violet',
  'maroon',
  'olive',
  'navy',
  'silver',
  'gold',
  'black'
]; // Colors to cycle through
  index: number = 0; // Index to track the current color
  index2: number = 0; // Index to track the current color
  i:number=0;
  csize!:string;
  sizeclasses:string[]=['text-size-small','text-size-medium','text-size-large'];
  ngOnInit() {
    this.startColorChange();
    this.startSizeChange()
  }

  startColorChange() {
    setTimeout(() => {
      this.currentColor = this.colors[this.index];
      this.index = (this.index + 1) % this.colors.length; // Loop through colors
      // this.index2 = (this.index2 + 1) % this.colors.length; // Loop through colors
      console.log(this.currentColor)
      this.i+=1;
      this.startColorChange();
    }, 1000); // Change color every 1 second (1000 milliseconds)
  }
  startSizeChange() {
    setTimeout(() => {
      this.csize = this.sizeclasses[this.index2];
  
      this.index2 = (this.index2 + 1) % this.sizeclasses.length; // Loop through colors
      console.log(this.csize)
      // this.i+=1;
      this.startSizeChange();
    }, 1000); // Change color every 1 second (1000 milliseconds)
  }

}




