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
  allItems: Medication[] = [];
  selected: Medication | null = null;

  filterText = '';

  constructor(private medicationService: MedicationService) { }

  ngOnInit(): void {
    this.loadItems(); // LOAD STATIC DATA FOR LIST
  }

  async loadItems(): Promise<void> {
    const data = await this.medicationService.getAll();

    this.allItems = data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.applyFilter();
  }

  applyFilter(): void {
    const text = this.filterText.toLowerCase().trim();

    this.items = this.allItems.filter(m =>
      m.name.toLowerCase().includes(text),
    );
  }

  onSave(medication: Medication): void {
    if (medication.id) { // for edit
      const item = this.items.find(obj => obj.id === medication.id);
      this.medicationService.update(medication, item?.createdAt)
        .then(() => {
          this.loadItems();
          this.selected = null;
          alert('Medication updated successfully!');
        })
        .catch(() => {
          alert('Error on medication updated!');
        });
    } else { // for add
      this.medicationService.add(medication)
        .then(() => {
          this.loadItems();
          this.selected = null;
          alert('Medication updated successfully!');
        }).catch(() => {
          alert('Erro on adding medication!');
        });
    }
  }

  onUpdate(medication: Medication): void {
    this.selected = { ...medication };
  }

  onDelete(medication: Medication): void {
    this.medicationService.delete(medication)
      .then(() => {
        this.loadItems();
        alert('Medication deleted successfully!');
      })
      .catch(() => {
        alert('Error deleting medication');
      });
  }
}
