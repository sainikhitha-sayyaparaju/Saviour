import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  isClicked: any = false;
  prawns: any;
  value: any;
  constructor(private weatherService: WeatherService) {
    this.prawns = [{value: "", name: "select type of Shrimp" }, {value: "prawn1", name: "Penaeus monodon"},{value: "prawn2", name: "Penaeus indicus"},
     {value: "prawn2", name: "Penaeus merguiensis"}, {value: "prawn3", name: "P. vannamei"}, {value: "prawn4", name: "P. Stylirostris"}, {value: "prawn5", name: "P. Japonicus"},
      {value: "prawn6", name: "P. chinensis"}, {value: "prawn7", name: "P. semisulcatus"},
       {value: "prawn8", name: "Acetes erythraeus"}, {value: "prawn6", name: "P. Orientalis"}];
    this.value = "";
  }

  ngOnInit(): void {
    this.getLocation();
  }
  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;
        this.weatherService.getWeatherDataByCoords(this.lat, this.lon).subscribe(data=>{
            this.weather = data;
        });
      })
    }
  }
  getCity(city: string){
    this.weatherService.getWeatherDataByCityName(city).subscribe(data=>{
      this.weather = data;
      if(this.value == ""){
        alert('please select a Prawn');
        this.isClicked = false;
        }
        else
        this.isClicked = true;
       
  })
  }
}
