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

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.loadItems(); // LOAD STATIC DATA FOR LIST
  }

  loadItems(): void {
    this.items = this.medicationService.getAll()
    .sort((a, b) => a.name.localeCompare(b.name)); // 1- SORT LIST BY NAME AS REQUIRED!;
  }

}
