import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';
import { Weatherdata } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherdata(cityName: string): Observable<Weatherdata> {
    return this.http.get<Weatherdata>(Environment.weatherApiBaseUrl, {
      params: new HttpParams()
        .set('q', cityName) // City name
        .set('units', 'metric') // Metric units for temperature (Celsius)
        .set('appid', Environment.apiKey) // API key
    });
  }
}
