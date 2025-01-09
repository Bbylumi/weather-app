import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { WeatherService } from './services/weather.service';
import { Weatherdata } from './models/weather.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'Lagos';
  weatherData?: Weatherdata;

  // ngOnInit lifecycle method
  ngOnInit(): void {
    this.getWeatherdata(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.getWeatherdata(this.cityName);
    this.cityName = '';

  }

  private getWeatherdata( cityName: string) {
    this.weatherService.getWeatherdata(cityName)
     .subscribe({
      next: (Response) => {
        this.weatherData = Response;
        console.log(Response);
      }
     })
  }
}
