import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, concat, Observable, of } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';

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
export class ButtonComponent implements OnInit {
  @Input() status$: Observable<{ submitting?: any, finished?: any, clear?: any }>;

  constructor() {
  }

  ngOnInit() {
    this.status$ = this.status$.pipe(
      switchMap((status: any) => {
        if (status.finished) {
          return concat(of(status), of({ clear: true }).pipe(delay(500)));
        }
        return of(status);
      }),
    );
  }

}
