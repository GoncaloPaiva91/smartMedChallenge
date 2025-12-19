import { Component, OnInit } from '@angular/core';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss'],
})
export class MedicationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'createdAt', 'updatedAt', 'actions'];
  medications: Medication[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
