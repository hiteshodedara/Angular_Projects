import { Component } from '@angular/core';
import { ColorchangeService } from './services/colorchange.service';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'animation';
  mycolor1 = ''
  mycolor2 = ''
  mycolor3 = ''
  mycolor4 = ''

  color1name=''
  color2name=''
  color3name=''
  color4name=''





  constructor(private colorService: ColorchangeService) {
 
    

    
  }

   

  onclick() {
    interval(1000)
      .pipe(take(20))  // Change color 20 times
      .subscribe((item) => {
        let color1 = this.colorService.getNextColor();
        this.mycolor1=color1[1];
        this.color1name=color1[0]
        
        let color2 = this.colorService.getNextColor();
        this.mycolor2=color1[1];
        this.color2name=color1[0]
        
        let color3 = this.colorService.getNextColor();
        this.mycolor3=color1[1];
        this.color3name=color1[0]
        
        let color4 = this.colorService.getNextColor();
        this.mycolor4=color1[1];
        this.color4name=color1[0]
        
      });
  }



}