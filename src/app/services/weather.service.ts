import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from '../environments/environment';
import { Weatherdata } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }

  getWeatherdata( cityName: string): Observable<Weatherdata> {
    return this.http.get<Weatherdata>(Environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set(Environment.xrapidapihostheadername, Environment.xrapidapihostheadervaule)
        .set(Environment.xrapidapikeyheadername, Environment.xrapidapikeyheadervalue),
      params: new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json')
    });
  }
}
