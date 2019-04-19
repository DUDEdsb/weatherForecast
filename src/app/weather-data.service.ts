import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class WeatherDataService {

  constructor(private http: HttpClient) { }
  url: string = "http://api.openweathermap.org/data/2.5/forecast?q="
  apikey:string = "&APPID=e00d8d1d0ee7d8e4e1e8909cd8c29dc3";
  getDataFromApi(cityName: string){
    // this.http.get(this.url+"noida"+this.apikey)
    return this.http.get(this.url+cityName+this.apikey);
  //   .subscribe((res: Response) => {
  //     console.log(res);     
  // });
  }
}
