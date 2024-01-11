import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  searchedCity = '';
  CityData: any; 
  WeatherData: any;
  constructor(){};

  ngOnInit(){
    this.WeatherData = {
      main : {},
      isDay: true
    };

    this.getWeather("29.65140", "-82.32520");
    //console.log(this.WeatherData)
  }

  getCity(input: string){
    this.searchedCity = input; 
    fetch('https://api.openweathermap.org/geo/1.0/direct?q='+this.searchedCity+'&limit=5&appid=20daefffe6b92667a681bcef3be17cc0').then(response=>response.json()).then(data=>{this.setGeo(data);});
  }
  
  
  getWeather(lat: string, lon: string){
    fetch('https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=20daefffe6b92667a681bcef3be17cc0').then(response=>response.json()).then(data=>{this.setWeather(data);})
  }

  setGeo(data:any){
    this.CityData = data;
    console.log(this.CityData)
    console.log(this.CityData[0].lon)
    console.log(this.CityData[0].lat)
    this.getWeather(this.CityData[0].lat, this.CityData[0].lon)
    //this.getWeather(this.CityData.lat, this.CityData.long)
  }

  setWeather(data: any){
    this.WeatherData = data;
    let timeSunset = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = timeSunset.toLocaleTimeString();
    let currentDate = new Date(); 
    this.WeatherData.isDay = (currentDate.getTime() < timeSunset.getTime());
    this.WeatherData.temp = ((this.WeatherData.main.temp - 273.15) * 9/5 + 32).toFixed(0);
    this.WeatherData.temp_min = ((this.WeatherData.main.temp_min - 273.15) * 9/5 + 32).toFixed(0);
    this.WeatherData.temp_max = ((this.WeatherData.main.temp_max - 273.15) * 9/5 + 32).toFixed(0);
    this.WeatherData.temp_feels_like = ((this.WeatherData.main.feels_like - 273.15) * 9/5 + 32).toFixed(0);
  }

}
