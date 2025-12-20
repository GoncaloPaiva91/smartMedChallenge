import { Injectable } from '@angular/core';

import { Medication } from '../models/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  medications: Medication[] = [
    {
      id: 1,
      name: 'Paracetamol',
      category: 'Analgesic',
      quantity: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Griponal',
      category: 'Analgesic',
      quantity: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  private nextId = 3;

  getAll(): Medication[] {
    return [...this.medications];
  }

  add(medication: Medication): void {
    this.medications.push({
      ...medication,
      id: this.nextId++,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  update(item: Medication, createdAt?: Date): void {
    const index = this.medications.findIndex(m => m.id === item.id);

    if (index !== -1) {
      this.medications[index] = {
        ...item,
        createdAt,
        updatedAt: new Date(),
      };
    }
  }
}
