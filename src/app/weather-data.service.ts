import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class WeatherDataService {

  constructor(private http: HttpClient) { }
  currentUrl: string = "http://api.openweathermap.org/data/2.5/weather?q="
  url: string = "http://api.openweathermap.org/data/2.5/forecast?q="
  apikey: string = "&APPID=e00d8d1d0ee7d8e4e1e8909cd8c29dc3";
  units = '&units=' + "metric";

  getCurrentData(cityName: string) {
    return this.http.get(this.currentUrl + cityName + this.units + this.apikey);
  }
  getDataFromApi(cityName: string) {
    return this.http.get(this.url + cityName + this.units + this.apikey);
  }
}