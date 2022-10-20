import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastsListComponent } from './forecasts-list/forecasts-list.component';

const forecastRoutes: Routes = [
  {
    path: '', component: ForecastsListComponent,
  },
];
export const routing: ModuleWithProviders<any> = RouterModule.forChild(forecastRoutes);
