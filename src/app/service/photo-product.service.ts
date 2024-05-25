import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PhotoproductResponseDto } from '../models/response/Photo-productResponceModel';
import { PhotoproductRequestDto } from '../models/request/Photo-productRequestModel';

@Injectable({
  providedIn: 'root',
})
export class PhotoProductServiceService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'https://localhost:7253/api/Product';

  getAllPhotoProducts(): Observable<PhotoproductResponseDto[]> {
    return this.http.get<PhotoproductResponseDto[]>(this.baseUrl);
  }

  deletePhotoProduct(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  createPhotoProduct(
    photoproductRequestDto: PhotoproductRequestDto
  ): Observable<PhotoproductResponseDto> {
    return this.http.post<PhotoproductResponseDto>(
      this.baseUrl,photoproductRequestDto );
  }

  updatePhotoProduct(
    id: number,
    photoproductRequestDto: PhotoproductRequestDto
  ): Observable<PhotoproductResponseDto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<PhotoproductResponseDto>(url, photoproductRequestDto);
  }
}
