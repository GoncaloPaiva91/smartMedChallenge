import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MedicationFormComponent } from './medication-form.component';
import { Medication } from '../../models/medication.model';

describe('MedicationFormComponent', () => {
  let component: MedicationFormComponent;
  let fixture: ComponentFixture<MedicationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedicationFormComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(MedicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit save event when form is valid', () => {
    spyOn(component.save, 'emit');

    const medication: Medication = {
      id: 1,
      name: 'Paracetamol',
      category: 'Analgesic',
      quantity: 10,
    };

    component.form.setValue(medication);
    component.onSubmit();

    expect(component.save.emit).toHaveBeenCalledWith(medication);
  });
});
