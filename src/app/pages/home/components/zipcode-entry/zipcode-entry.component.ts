import { Component } from '@angular/core';
import { LocationService } from '@core/services/location.service';
import { ButtonStatus } from '@shared/components/button/button.component';
import { Observable } from 'rxjs';
import { CountryService } from '@core/services/country.service';
import { LabelValue } from '@shared/components/autocomplete/models/label-value.model';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  zipcode = '';
  country: LabelValue;
  private status$: ButtonStatus = new ButtonStatus({ clear: true });
  status: Observable<{ submitting?: any, finished?: any, clear?: any }> = this.status$.asObservable();

  constructor(private service: LocationService,
              public countryService: CountryService) {
  }

  addLocation() {
    this.status$.next({ submitting: true });
    this.service.addLocation(this.zipcode, this.country.value);
    this.status$.next({ finished: true });

    this._clearInput();
  }

  private _clearInput() {
    this.zipcode = '';
    this.country = {};
  }

}
