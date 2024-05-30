import { Injectable } from '@angular/core';
import {environment} from "./environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private  apiUrl=environment.apiUrl;
  //add LoginVendeur

  //send token in the header authorziatoin and fetch for get method in LoginVendeur

  getAdminId(token : string){
  //  const apiUrl = 'https://localhost:7100/api/LoginVendeur';
    const api =`${this.apiUrl}/LoginVendeur`
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Headers:', headers);
    return this.http.get(api, {'headers' :  headers });
  }

  // getRole(token : any):Observable<string>{
  //   //  const apiUrl = 'https://localhost:7100/api/LoginVendeur';
  //
  //   const api =`${this.apiUrl}/LoginVendeur/role`
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  //   console.log('Headers:', headers);
  //  // return this.http.get(api, {'headers' :  headers  });
  //   return this.http.get(api, { headers: headers, responseType: 'text' as 'json' });
  // }

  getRole(token: any): Observable<string> {
    const api = `${this.apiUrl}/LoginVendeur/role`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Headers:', headers);

    return this.http.get(api, { headers: headers, responseType: 'text' }).pipe(
      map(response => {
        // Parse the JSON string manually and extract the role
        try {
          const jsonResponse = JSON.parse(response);
          return jsonResponse.role;
        } catch (error) {
          console.error('Error parsing JSON response', error);
          throw new Error('Invalid JSON response');
        }
      })
    );
  }



}
