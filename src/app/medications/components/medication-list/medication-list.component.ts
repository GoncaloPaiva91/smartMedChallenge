import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Medication } from '../../models/medication.model';

@Component({
  selector: 'app-medication-list',
  templateUrl: './medication-list.component.html',
  styleUrls: ['./medication-list.component.scss'],
})
export class MedicationListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'category', 'quantity', 'createdAt', 'updatedAt', 'actions'];
  @Input() items: Medication[] = [];
  @Output() update = new EventEmitter<Medication>();

  constructor() { }

  ngOnInit(): void {
  }

  trackById(index: number, item: Medication): any {
    return item.id;
  }

  updateItem(item: Medication): void {
    this.update.emit(item);
  }

  // deleteItem(item: Medication): void {
  //   this.deleteItem.emit(item)
  // }
}
