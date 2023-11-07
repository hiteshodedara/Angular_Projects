import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval, take } from 'rxjs';
import { ColorchangeService } from '../services/colorchange.service';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent implements OnDestroy{


myColors: string[] = [];
colorNames: string[] = [];
bg = '';
private intervalSubscription: Subscription | undefined;
private isRunning = false;

constructor(private colorService: ColorchangeService) { }

ngOnDestroy() {
  this.stop();
}

start() {
  if (!this.isRunning) {
    this.isRunning = true;
    this.intervalSubscription = interval(1000)
      .pipe(take(30))
      .subscribe(() => {
        for (let i = 0; i < 4; i++) {
          this.colorService.getNextColor().subscribe(color => {
            this.myColors[i] = color[1];
            this.colorNames[i] = color[0];
          });
        }
        this.colorService.getNextColor().subscribe(color => {
          this.bg = color[1];
        });
      });
  }
}

stop() {
  if (this.intervalSubscription) {
    this.intervalSubscription.unsubscribe();
    this.isRunning = false;
  }
}
}
