import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '@core/services/weather.service';
import { Router } from '@angular/router';
import { LocationService } from '@core/services/location.service';
import { AutoUnsubscribe } from '@core/components/auto-unsubscribe.component';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent extends AutoUnsubscribe implements OnInit {
  @Input() zipCode: string;

  location$: Observable<{ loading: boolean, value?: any, error?: any }>;

  constructor(private locationService: LocationService, private weatherService: WeatherService, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this._initPolling();
  }

  showForecast() {
    this.router.navigate(['/forecast', this.zipCode]);
  }

  removeLocation() {
    this.locationService.removeLocation(this.zipCode);
  }

  getWeatherIcon(id: number) {
    return this.weatherService.getWeatherIcon(id);
  }

  private _initPolling() {
    this.location$ = this.weatherService
      .getLiveConditionByZipcode(this.zipCode)
      .pipe(takeUntil(this.destroy$));
  }
}
