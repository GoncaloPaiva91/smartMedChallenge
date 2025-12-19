import { Component, OnInit } from '@angular/core';
import { MedicationService } from '../../services/medication.service';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss'],
})
export class MedicationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'createdAt', 'updatedAt'];
  medications: Medication[] = [];

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.load(); // load list of medications;
  }
  
  load() {
  this.medications = this.medicationService.getAll();
}

}
