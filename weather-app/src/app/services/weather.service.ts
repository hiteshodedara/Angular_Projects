
import { Injectable } from '@angular/core';
import { weathermodel } from '../models/weather.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  public wdata!:weathermodel;

  private apiKey = "66d4c3ad5aac4a7688c124820232310";
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) {}

  getWeatherDatafromapi(city: string) {
    const params = { key: this.apiKey, q: city };
    const data=this.http.get<any>(this.apiUrl, { params }).toPromise();
    // console.log(data);
    return data
  }


  async getweatherdata(city: string):Promise<weathermodel|any>{
  try {
    let data= await this.getWeatherDatafromapi(city);
    // console.log(data);
    this.wdata={
      cityname: data.location.name,
    temp: data.current.temp_c,
    humidity: data.current.humidity,
    wind_speed: data.current.wind_kph,
    is_day: data.current.is_day,
    time: data.location.localtime,
    pressure:data.current.pressure_in,
    clude:{
      img: data.current.condition.icon,
      type: data.current.condition.text
    }
    }
    // console.log(this.wdata);
    
    return this.wdata
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}


}
