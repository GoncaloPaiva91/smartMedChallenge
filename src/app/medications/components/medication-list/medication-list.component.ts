import { Component, OnInit, Input } from '@angular/core';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss'],
})
export class MedicationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'createdAt', 'updatedAt', 'actions'];
  @Input() items: Medication[] = []; 

  constructor() { }

  ngOnInit(): void {
  }

}
