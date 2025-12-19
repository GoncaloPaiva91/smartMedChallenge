import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Medication } from '../../models/medication.model';
import { SubmitOnlyErrorStateMatcher } from '../../utils/submit-only-error-state.matcher';

@Component({
  selector: 'app-medication-form',
  templateUrl: './medication-form.component.html',
  styleUrls: ['./medication-form.component.scss']
})
export class MedicationFormComponent implements OnInit, OnChanges {
  form: FormGroup;
  submitted = false;
  matcher = new SubmitOnlyErrorStateMatcher(() => this.submitted);

  @Input() selected: Medication | null = null;
  @Output() save = new EventEmitter<Medication>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      category: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  trackById(index: number, item: Medication) {
    return item.id;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    this.save.emit(this.form.value as Medication);

    this.form.reset({
      id: null,
      name: '',
      category: '',
      quantity: 1
    });

    this.submitted = false;
  }

}
