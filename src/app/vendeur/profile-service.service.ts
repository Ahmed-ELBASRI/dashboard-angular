import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProfileServiceService {

  constructor(private http : HttpClient) { }
  private apiUrl = 'https://localhost:7100/api/LoginVendeur';

  getProfileData(token: string): Observable<any> {
    const apiUrl = 'https://localhost:7100/api/LoginVendeur';
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Headers:', headers);
    return this.http.get(apiUrl, {'headers' :  headers });
  }


  getVendeurData(id: number, token: string): Observable<any> {
    console.log("get Vendeur Data service method");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${id}`;
    console.log(`Requesting URL: ${url} with token: ${token}`);
    return this.http.get(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  updateVendeurData(id: number, profile: any, token: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, profile, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  updatePassword(id: number, updatePasswordDto: any, authToken: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const url = `${this.apiUrl}/updatePassword/${id}`;

    return this.http.put(url, updatePasswordDto, { headers }).pipe(
      catchError(error => {
        console.error('Error updating password', error);
        return throwError(error);
      })
    );
  }


  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }

}
