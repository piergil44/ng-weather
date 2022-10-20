import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';
import { routing } from './forecast.routing';

@NgModule({
  declarations: [ForecastsListComponent],
  imports: [
    CommonModule,
    routing,
  ],
})
export class ForecastModule {
}
