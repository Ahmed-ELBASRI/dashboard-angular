import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private apiUrl = 'https://localhost:7253/api/Command';

  constructor(private http: HttpClient) { }

  getCommands(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}