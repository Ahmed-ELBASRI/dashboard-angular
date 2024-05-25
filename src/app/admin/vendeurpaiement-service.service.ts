import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendeurPaiementService {
    private apiUrl = 'https://localhost:7100/api/Paiement';
    private planPaiementUrl = 'https://localhost:7100/api/PlanPaiement';

    constructor(private http: HttpClient) { }
  
    getPaiementsByVendeurId(vendeurId: number): Observable<any[]> {
      const url = `${this.apiUrl}/vendeur/${vendeurId}`;
      return this.http.get<any[]>(url);
    }
    getPlanPaiementById(planPaiementId: number): Observable<any> {
        const url = `${this.planPaiementUrl}/${planPaiementId}`;
        return this.http.get<any>(url);
      }
}
