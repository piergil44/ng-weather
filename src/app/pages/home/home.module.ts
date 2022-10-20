import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ZipcodeEntryComponent } from './components/zipcode-entry/zipcode-entry.component';
import { CurrentConditionsComponent } from './components/current-conditions/current-conditions.component';
import { routing } from './home.routing';

@NgModule({
  declarations: [
    ZipcodeEntryComponent,
    CurrentConditionsComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    routing,
  ],
})
export class HomeModule {
}
