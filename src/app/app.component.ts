import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {

  }
  title: string = "Weather Forecast"
  constructor(private dataservice: WeatherDataService) { }
  class:string="none";
  weatherList: any;
  weatherCurrData: any;
  cityName: string;
  error: boolean = false;
  getWeatherData() {
    this.class="";
    this.weatherList = [];
    this.dataservice.getCurrentData(this.cityName)
      .subscribe((currResp)=>{
        this.weatherCurrData = currResp;
        // console.log(currResp);
      }, (err)=>{
        this.error = true;
        window.alert("wrong city name")
      }
      );
    this.dataservice.getDataFromApi(this.cityName)
      .subscribe((resp)=>{
        var weatherData:any = resp;
        // console.log(resp);
        var i =0;
        for(let index=0;index<5;index++){
          this.weatherList.push(weatherData.list[i]);
          i=i+8;
        } 
        console.log(this.weatherList);
      })
  }
  newCity(cityName: string) {
    this.cityName = cityName;
  }
}