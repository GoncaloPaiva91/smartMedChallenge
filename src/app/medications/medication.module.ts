import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MedicationFormComponent } from './components/medication-form/medication-form.component';
import { MedicationListComponent } from './components/medication-list/medication-list.component';
import { MedicationPageComponent } from './pages/medication-page/medication-page.component';

@NgModule({
  declarations: [
    MedicationPageComponent,
    MedicationFormComponent,
    MedicationListComponent,

  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    MedicationPageComponent,
    MedicationFormComponent,
    MedicationListComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class MedicationsModule {}
