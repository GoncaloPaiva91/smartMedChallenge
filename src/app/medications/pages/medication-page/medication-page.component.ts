import { Component, OnInit } from '@angular/core';
import { Medication } from '../../models/medication.model';
import { MedicationService } from '../../services/medication.service';

@Component({
  selector: 'app-medication-page',
  templateUrl: './medication-page.component.html',
  styleUrls: ['./medication-page.component.scss']
})
export class MedicationPageComponent implements OnInit {
  items: Medication[] = [];
  selected: Medication | null = null;

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.loadItems(); // LOAD STATIC DATA FOR LIST
  }

  loadItems(): void {
    this.items = this.medicationService.getAll()
      .sort((a, b) => a.name.localeCompare(b.name)); // 1- SORT LIST BY NAME AS REQUIRED!;
  }

  onSave(medication: Medication): void {
    if (medication.id) { // for edit
      this.medicationService.update(medication);
      alert('Medication updated successfully');
    } else { // for add
      this.medicationService.add(medication);
    }
    this.selected = null;

    this.loadItems();
  }

  onEdit(medication: Medication): void {
    this.selected = { ...medication }; // cópia defensiva
  }
}
