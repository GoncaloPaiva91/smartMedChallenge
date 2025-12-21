import { Component, OnInit } from '@angular/core';
import { Medication } from '../../models/medication.model';
import { MedicationService } from '../../services/medication.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private medicationService: MedicationService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.loadItems(); // LOAD STATIC DATA FOR LIST
  }

  loadItems(): void {
    const data = this.medicationService.getAll();

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
          this.snackBar.open('Medication updated successfully!', 'OK', {
            duration: 2000,
          });
        })
        .catch(() => {
          this.snackBar.open('Error on medication updated!', 'OK', {
            duration: 2000,
          });
        });
    } else { // for add
      this.medicationService.add(medication)
        .then(() => {
          this.loadItems();
          this.selected = null;
          this.snackBar.open('Medication added successfully!', 'OK', {
            duration: 2000,
          });
        }).catch(() => {
          this.snackBar.open('Error on adding medication!', 'OK', {
            duration: 2000,
          });
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
        this.snackBar.open('Medication deleted successfully!', 'OK', {
          duration: 2000,
        });
      })
      .catch(() => {
        this.snackBar.open('Error deleting medication!', 'OK', {
          duration: 2000,
        });
      });
  }
}
