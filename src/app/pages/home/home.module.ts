import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { routing } from './home.routing';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';

@NgModule({
  declarations: [
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    MainComponent,
    LocationDetailComponent,
  ],
  imports: [
    CommonModule,
    routing,
  ],
})
export class HomeModule {
}
