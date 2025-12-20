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
      const item = this.items.find(obj => obj.id === medication.id);
      this.medicationService.update(medication, item?.createdAt);
      alert('Medication updated successfully');
    } else { // for add
      this.medicationService.add(medication);
    }
    this.selected = null;

    this.loadItems();
  }

  onUpdate(medication: Medication): void {
    this.selected = { ...medication };
  }
}
