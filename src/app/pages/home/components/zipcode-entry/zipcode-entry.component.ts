import { Component } from '@angular/core';
import { LocationService } from '@core/services/location.service';
import { CountryService } from '@core/services/country.service';
import { LabelValue } from '@shared/components/autocomplete/models/label-value.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  zipcode = '';
  country: LabelValue;

  constructor(private service: LocationService,
              public countryService: CountryService) {
  }

  addLocation() {
    return this.service.addLocation(this.zipcode, this.country.value)
      .pipe(
        tap((response) => {
          console.log(response);
          this._clearInput();
        }),
      );
  }

  search(query: string) {
    return this.countryService.getCountriesByName(query);
  }

  private _clearInput() {
    this.zipcode = '';
    this.country = {};
  }

}
