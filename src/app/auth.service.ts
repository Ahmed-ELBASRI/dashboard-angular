import { Injectable } from '@angular/core';
import {environment} from "./environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

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

  getRole(token : any){
    //  const apiUrl = 'https://localhost:7100/api/LoginVendeur';

    const api =`${this.apiUrl}/LoginVendeur/role`
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    console.log('Headers:', headers);
    return this.http.get(api, {'headers' :  headers });
  }



}
