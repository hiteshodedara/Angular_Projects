import { Component, OnInit } from '@angular/core';
interface City {
  name: string;
  code: string;
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  visible: boolean = false;

    position: any = 'topleft';
    value: any;

    showDialog(position: string) {
        this.position = position;
        this.visible = true;
    }

    ngOnInit(): void {
        
    }
}
