import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const LOCATIONS: string = 'locations';

@Injectable()
export class LocationService {
  private locations$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  constructor() {
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.locations$.next(JSON.parse(locString));
    }
  }

  getAllLocations() {
    return this.locations$.asObservable();
  }

  addLocation(zipcode: string) {
    const currentLocation = this.locations$.value;
    currentLocation.push(zipcode);
    localStorage.setItem(LOCATIONS, JSON.stringify(currentLocation));
    this.locations$.next(currentLocation);
  }

  removeLocation(zipcode: string) {
    const currentLocation = this.locations$.value;
    let index = currentLocation.indexOf(zipcode);
    if (index !== -1) {
      currentLocation.splice(index, 1);
      localStorage.setItem(LOCATIONS, JSON.stringify(currentLocation));
    }
    this.locations$.next(currentLocation);
  }
}
