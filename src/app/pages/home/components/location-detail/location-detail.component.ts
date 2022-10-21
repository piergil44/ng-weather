import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '@core/services/weather.service';
import { LocationService } from '@core/services/location.service';
import { AutoUnsubscribe } from '@core/components/auto-unsubscribe.component';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LocationWeather } from '@core/models/location.model';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent extends AutoUnsubscribe implements OnInit {
  @Input() zipCode: string;
  @Input() countryCode: string;

  location$: Observable<{ loading: boolean, value?: LocationWeather, error?: Record<string, string> }>;

  constructor(private locationService: LocationService, private weatherService: WeatherService) {
    super();
  }

  ngOnInit(): void {
    this._initPolling();
  }

  removeLocation() {
    this.locationService.removeLocation(this.zipCode, this.countryCode);
  }

  getWeatherIcon(id: number) {
    return this.weatherService.getWeatherIcon(id);
  }

  private _initPolling() {
    this.location$ = this.weatherService
      .getLiveConditionByZipcode(this.zipCode, this.countryCode)
      .pipe(takeUntil(this.destroy$));
  }
}
