import { Component, Input } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { delay, take, tap } from 'rxjs/operators';

export class ButtonStatus extends BehaviorSubject<{ submitting?: any, finished?: any, clear?: any }> {
  constructor(param: { submitting?: any, finished?: any, clear?: any }) {
    super(param);
  }
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() status$: BehaviorSubject<{ submitting?: any, finished?: any, clear?: any }> = new BehaviorSubject<{ submitting?: any; finished?: any; clear?: any }>({ clear: true });
  @Input() clickHandler: (event: any) => Observable<any> | Promise<any>;

  constructor() {
  }

  onClick(event: any) {
    this.status$.next({ submitting: true });
    from(this.clickHandler(event))
      .pipe(
        tap(() => this.status$.next({ finished: true })),
        delay(500),
        tap(() => this.status$.next({ clear: true })),
        take(1),
      )
      .subscribe();
  }

}
