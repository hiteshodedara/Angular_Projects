import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  btn!: boolean;
  namecolor!: string;

  textcolor = '';
  disable?: boolean;
  spass?: boolean;
  color: string[] = [
    'red',
    'green',
    'blue',
    'orange',
    'pink',
    'grey',
    'green',
    'blue',
    'orange',
    'pink',
  ]

  updatecolor(color: string) {
    this.textcolor = color
  }

  changeColors() {
    for (let i = 0; i < this.color.length; i++) {
      setTimeout(() => {
        this.namecolor = this.color[i];
      }, i * 1000); // Change color every 1 second (1000 milliseconds)
    }
  }


}
