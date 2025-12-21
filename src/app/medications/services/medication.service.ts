import { Injectable } from '@angular/core';

import { Medication } from '../models/medication.model';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  // for putting in memory;
  medications: Medication[] = [
    {
      id: 1,
      name: 'Griponal',
      category: 'Analgesic',
      quantity: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Paracetamol',
      category: 'Analgesic',
      quantity: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getAll(): Medication[] {
    return [...this.medications];
  }

  async add(medication: Medication): Promise<void> {
    return new Promise((resolve) => {
      this.medications.push({
        ...medication,
        id: this.getNextId(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      setTimeout(() => resolve(), 300);
    });
  }

  async update(item: Medication, createdAt?: Date): Promise<void> {
    return new Promise((resolve) => {
      const index = this.medications.findIndex(m => m.id === item.id);

      if (index !== -1) {
        this.medications[index] = {
          ...item,
          createdAt,
          updatedAt: new Date(),
        };
      }
      setTimeout(() => resolve(), 300);
    });
  }

  async delete(item: Medication): Promise<void> {
    return new Promise((resolve) => {
      this.medications = this.medications.filter(element => element.id !== item.id);
      setTimeout(() => resolve(), 300);
    });
  }

  private getNextId(): number {
    return this.medications.length
      ? Math.max(...this.medications.map(m => m.id)) + 1 : 1;
  }
}
