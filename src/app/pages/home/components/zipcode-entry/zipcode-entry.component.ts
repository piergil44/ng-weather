import { Component } from '@angular/core';
import { LocationService } from '@core/services/location.service';
import { ButtonStatus } from '@shared/components/button/button.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
})
export class ZipcodeEntryComponent {
  zipcode = '';
  private status$: ButtonStatus = new ButtonStatus({ clear: true });
  status: Observable<{ submitting?: any, finished?: any, clear?: any }> = this.status$.asObservable();

  constructor(private service: LocationService) {
  }

  addLocation() {
    this.status$.next({ submitting: true });
    this.service.addLocation(this.zipcode);
    this.status$.next({ finished: true });
  }

}
