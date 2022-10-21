import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LocationInfo } from '@core/models/location.model';
import { delay } from 'rxjs/operators';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  private locations$: BehaviorSubject<LocationInfo[]> = new BehaviorSubject<LocationInfo[]>([]);

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations$.next(JSON.parse(locString));
    }
  }

  getAllLocations(): Observable<LocationInfo[]> {
    return this.locations$.asObservable();
  }

  addLocation(zipcode: string, countryCode: string) {
    const currentLocation = this.locations$.value;
    currentLocation.push({ zipcode, countryCode });
    localStorage.setItem(LOCATIONS, JSON.stringify(currentLocation));
    this.locations$.next(currentLocation);
    // Simulate is an async fn
    return of('Location added correctly').pipe(delay(1000));
  }

  removeLocation(zipcode: string, countryCode: string) {
    const currentLocation = this.locations$.value;
    let index = currentLocation.findIndex((location) => location.zipcode === zipcode && location.countryCode === countryCode);
    if (index !== -1) {
      currentLocation.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(currentLocation));
    }
    this.locations$.next(currentLocation);
  }
}
