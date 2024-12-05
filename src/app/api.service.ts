import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SparePartInterface } from './types';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  httpClient = inject(HttpClient);
  constructor() {}

  getAllSpareParts() {
    return this.httpClient.get<SparePartInterface[]>(
      'http://localhost:5050/api/SpareParts/GetSpareParts'
    );
  }

  getSparePartByID(id: number) {
    return this.httpClient.get<SparePartInterface>(
      'http://localhost:5050/api/SpareParts/GetSparePart/' + id
    );
  }
  editSparePart(item: SparePartInterface) {
    return this.httpClient.put(
      'http://localhost:5050/api/SpareParts/PutSparePart',
      item
    );
  }
  deleteSparePart(id: number) {
    return this.httpClient.delete(
      'http://localhost:5050/api/SpareParts/DeleteSparePart/' + id
    );
  }
  createSparePart(item: SparePartInterface) {
    return this.httpClient.post<SparePartInterface>(
      'http://localhost:5050/api/SpareParts/PostSparePart',
      item
    );
  }
  getAllSparePartCategories() {
    return this.httpClient.get(
      'http://localhost:5050/api/SpareCategories/GetSpareCategories'
    );
  }
}
