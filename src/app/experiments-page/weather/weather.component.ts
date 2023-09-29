import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {

  WeatherData: any;
  constructor(){};

  ngOnInit(){
    this.WeatherData = {
      main : {},
      isDay: true
    };
    
    this.getWeather();
    console.log(this.WeatherData)
  }
  
  getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=29.65140&lon=-82.32520&appid=20daefffe6b92667a681bcef3be17cc0').then(response=>response.json()).then(data=>{this.setWeather(data);})
  }

  setWeather(data: any){
    this.WeatherData = data;
    let timeSunset = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = timeSunset.toLocaleTimeString();
    let currentDate = new Date(); 
    this.WeatherData.isDay = (currentDate.getTime() < timeSunset.getTime());
    this.WeatherData.temp_celsius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max- 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.temp_feels_like - 273.15).toFixed(0);
  }

}
