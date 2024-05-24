import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AttProductResponseDto } from '../models/response/AttProductResponceModel';
import { Observable } from 'rxjs';
import { AttProductRequestModel } from '../models/request/AttProductRequestModel';

@Injectable({
  providedIn: 'root',
})
export class AttPoductServiceService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://localhost:7253/api/AttProduct';

  getProducts(): Observable<AttProductResponseDto[]> {
    return this.http.get<AttProductResponseDto[]>(`${this.baseUrl}`);
  }

  getProduct(id: number): Observable<AttProductResponseDto> {
    return this.http.get<AttProductResponseDto>(`${this.baseUrl}/${id}`);
  }

  addProduct(attproduct: AttProductRequestModel): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}`, attproduct);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/products/${id}`);
  }

  updateProduct(
    id: number,
    attproduct: AttProductRequestModel
  ): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, attproduct);
  }
}
