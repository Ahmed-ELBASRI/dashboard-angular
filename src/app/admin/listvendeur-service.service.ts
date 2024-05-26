import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../environments/environment";
import {AdminVendeurDto} from "../Dtos/AdminVendeurDto";


@Injectable({
  providedIn: 'root'
})
export class listvendeurService {

  //private apiUrl = 'https://localhost:7100/api/Vendeur';
  private apiUrl=environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVendeurs(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Vendeur`);
  }

  validerVendeur(requestDto : AdminVendeurDto , token : string) : Observable<any>{

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/Admin/validate`, requestDto, { headers });
  }
  bannerVendeur(requestDto : AdminVendeurDto,token : string) : Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/Admin/Banned`, requestDto, { headers });

  }


}
