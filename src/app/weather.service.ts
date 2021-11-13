import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url = 'https://api.openweathermap.org/data/2.5/weather';
apiKey = '00777ad3d36faae4ffd23a8855e2ed1e';
  constructor(private http: HttpClient) { };
  getWeatherDataByCoords(lat: any, lon: any){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lng', lon)
    .set('units', 'imperial')
    .set('appid', this.apiKey)
    
    return this.http.get(this.url, {params});
  };
  getWeatherDataByCityName(city: string){
    let params = new HttpParams()
    .set('q', city)
    .set('units', 'imperial')
    .set('appid', this.apiKey)
    
    return this.http.get(this.url, {params});
  }
}
