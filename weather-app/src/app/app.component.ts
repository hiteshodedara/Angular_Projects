import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weathermodel } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WeatherService]
})
export class AppComponent implements OnInit {
  title = 'weather-app';

  public wetherdata1 = {
    cityname: '',
    temp: '',
    humidity: '',
    wind_speed: '',
    is_day: 0,
    time: '',
    pressure: '',
    clude: {
      img: '',
      type: ''
    }
  };




  constructor(private weaterservice: WeatherService) {

  }




  async ngOnInit() {

    try {
      this.wetherdata1 = await this.weaterservice.getweatherdata('india');
      // console.clear();
      console.log('India:',this.wetherdata1);

    } catch (error) {
      // console.clear();
      console.error('Error fetching weather data:', error);
    }
  }






  async onclick() {

    const inputElement = document.querySelector('.inputbox') as HTMLInputElement;

    if (inputElement) {
      const inputValue = inputElement.value;
      const imp = inputValue;
      
      try {
        console.clear();
        console.log(imp)
        this.wetherdata1 = await this.weaterservice.getweatherdata(imp);
        console.log(imp,this.wetherdata1);

      } catch (error) {
        console.clear();
        console.error('Error fetching weather data:', error);
      }

    }
  }
}

