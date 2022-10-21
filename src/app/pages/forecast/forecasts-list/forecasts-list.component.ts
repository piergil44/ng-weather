import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '@core/services/weather.service';
import { AutoUnsubscribe } from '@core/components/auto-unsubscribe.component';
import { takeUntil } from 'rxjs/operators';
import { DailyForecast } from '@core/models/daily-forecast.model';

@Component({
  selector: 'app-forecasts-list',
  templateUrl: './forecasts-list.component.html',
  styleUrls: ['./forecasts-list.component.css'],
})
export class ForecastsListComponent extends AutoUnsubscribe {
  zipcode: string;
  countrycode: string;
  forecast: DailyForecast;


  constructor(private weatherService: WeatherService, route: ActivatedRoute) {
    super();
    route.params.subscribe(params => {
      this.zipcode = params['zipcode'];
      this.countrycode = params['countrycode'];
      this.weatherService.getForecast(this.zipcode, this.countrycode)
        .pipe(takeUntil(this.destroy$))
        .subscribe(data => this.forecast = data);
    });
  }

  getWeatherIcon(id: number) {
    return this.weatherService.getWeatherIcon(id);
  }

}
