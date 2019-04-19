import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { WeatherDataService } from './weather-data.service';
import { OutputitemComponent } from './outputitem/outputitem.component';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputitemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbAccordionModule
  ],
  providers: [
    WeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
