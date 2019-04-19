import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from './weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit() {

  }
  constructor(private dataservice: WeatherDataService){}
  title = 'WeatherForecast';
  cityName: string ='';
  getWeatherData(){
    // console.log(this.cityName)
    this.dataservice.getDataFromApi(this.cityName)
    .subscribe((resp)=>{
      console.log(resp);
    });
  }
  newCity(cityName){
    this.cityName = cityName;
  }
}
