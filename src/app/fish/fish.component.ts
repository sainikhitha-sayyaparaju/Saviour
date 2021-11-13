import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  isClicked: any = false;
  prawns: any;
  value: any;
  constructor(private weatherService: WeatherService) {
    this.prawns = [{value: "", name: "select type of Fish" }, {value: "atlsalmon", name: "ATL Salmon"},{value: "browntrout", name: "Salmo trutta"}, {value: "catfish", 
    name: "Zurias gtzriepinus (sharptooth Catfish"}, {value: "hybridcatfish1", name: " Ictalurus furcatus"}, {value: "hybridcatfish2", name: " Ictalurus punctatus"}
    , {value: "channelcatfish", name: " Channel Catfish"}, {value: "bluecatfish", name: " Blue Catfish"}];
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
      alert('please select a fish');
      this.isClicked = false;
      }
      else
      this.isClicked = true;
  })
  }

}
