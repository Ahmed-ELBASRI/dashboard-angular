import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandDetailsService {
  private baseUrl = 'https://localhost:7253/api';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les lignes de commande par ID de commande
  getLignesByCommandId(commandId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/LigneCommande/commande/${commandId}`);
  }
}
