import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LabelValue } from '@shared/components/autocomplete/models/label-value.model';
import { Country } from '@core/models/country.model';


@Injectable()
export class CountryService {
  static URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {
  }

  getAllCountries(): Observable<LabelValue[]> {
    return this.http.get(`${ CountryService.URL }/all`)
      .pipe(
        map((response: Country[]) => {
          return this._countriesToLabelValue(response);
        }));
  }

  getCountriesByName(name: string) {
    return this.http.get(`${ CountryService.URL }/name/${ name }`)
      .pipe(
        map((response: Country[]) => {
          return this._countriesToLabelValue(response);
        }));
  }

  private _countriesToLabelValue(response) {
    return response.map(({ name, cca2 }: Country) => {
      return { label: name.common, value: cca2 } as LabelValue;
    });
  }

}
