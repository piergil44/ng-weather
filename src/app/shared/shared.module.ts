import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ButtonComponent,
    AutocompleteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ButtonComponent,
    AutocompleteComponent,
  ],
})
export class SharedModule {
}
