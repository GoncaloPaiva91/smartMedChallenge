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
    }
  ];

  getAll(): Medication[] {
    return this.medications;
  }
}
