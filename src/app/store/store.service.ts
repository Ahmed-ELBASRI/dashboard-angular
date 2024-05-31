import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Correct import
import { Observable } from 'rxjs';
import { StoreRequestModel } from '../models/request/store-request-model';
import { StoreResponseModel } from '../models/response/store-response-model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private apiUrl = 'https://localhost:7100/api/Store'; 

  constructor(private http: HttpClient) { }

  createStore(store: StoreRequestModel, file: File): Observable<any> {
    const formData = new FormData();
    // formData.append('dateCreation', store.dateCreation.toISOString());
    return this.http.post<any>(this.apiUrl, store);
  }
}