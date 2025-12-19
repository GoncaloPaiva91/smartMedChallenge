import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MedicationFormComponent } from './components/medication-form/medication-form.component';
import { MedicationListComponent } from './components/medication-list/medication-list.component';
import { MedicationPageComponent } from './pages/medication-page/medication-page.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MedicationPageComponent,
    MedicationFormComponent,
    MedicationListComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MedicationPageComponent,
    MedicationFormComponent,
    MedicationListComponent,
  ],
})
export class MedicationsModule {}
