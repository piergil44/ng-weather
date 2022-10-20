import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const homeRoutes: Routes = [
  {
    path: '', component: MainComponent,
  },
];
export const routing: ModuleWithProviders<any> = RouterModule.forChild(homeRoutes);
