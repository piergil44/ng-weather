import { Component } from '@angular/core';
import { LocationService } from '@core/services/location.service';
import { Observable } from 'rxjs';
import { LocationInfo } from '@core/models/location.model';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css'],
})
export class CurrentConditionsComponent {

  allLocations$: Observable<LocationInfo[]>;

  constructor(private locationService: LocationService) {
    this.allLocations$ = this.locationService.getAllLocations();
  }

}
