import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '@core/services/weather.service';
import { Router } from '@angular/router';
import { LocationService } from '@core/services/location.service';
import { AutoUnsubscribe } from '@core/components/auto-unsubscribe.component';
import { catchError, takeUntil } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.css'],
})
export class LocationDetailComponent extends AutoUnsubscribe implements OnInit {
  @Input() zipCode: string;

  location: any;

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

  private _initPolling() {
    this.weatherService
      .getLiveConditionByZipcode(this.zipCode)
      .pipe(
        catchError(({ error }) => {
          if (error.cod === '404') {
            console.log(error.message);
            this.locationService.removeLocation(this.zipCode);
          }
          return of(undefined);
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(
        data => this.location = data,
      );
  }
}
