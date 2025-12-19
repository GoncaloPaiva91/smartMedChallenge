import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicationFormComponent } from './components/medication-form/medication-form.component';
import { MedicationListComponent } from './components/medication-list/medication-list.component';

@NgModule({
  declarations: [
    MedicationFormComponent,
    MedicationListComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class MedicationsModule {}
