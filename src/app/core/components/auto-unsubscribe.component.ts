import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component(
  {
    template: '',
  },
)
export abstract class AutoUnsubscribe implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
