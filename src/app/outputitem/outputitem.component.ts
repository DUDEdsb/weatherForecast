import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-outputitem',
  templateUrl: './outputitem.component.html',
  styleUrls: ['./outputitem.component.css']
})
export class OutputitemComponent implements OnInit {

  @Input() cityName:string;
  @Input() countryName:string;
  @Input() weatherData:any;

  weekdays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat" ];
  
current;
day;
  constructor() { }

  ngOnInit() {
    this.weatherData;
    this.current = new Date(this.weatherData.dt_txt);
    this.day = this.weekdays[this.current.getDay()];
  }

}
