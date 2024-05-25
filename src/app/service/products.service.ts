import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductResponseDto } from '../models/response/ProductResponceModel';
import { ProductRequestDto } from '../models/request/ProductRequestModel';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://localhost:7253/api/Product';

  getAllProducts(): Observable<ProductResponseDto[]> {
    return this.http.get<ProductResponseDto[]>(this.baseUrl);
  }

  deleteProduct(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  createProduct(product: FormData): Observable<ProductResponseDto> {
    return this.http.post<ProductResponseDto>(this.baseUrl, product);
  }

  updateProduct(id: number, product: FormData): Observable<ProductResponseDto> {
    return this.http.put<ProductResponseDto>(`${this.baseUrl}/${id}`, product);
  }
}
