import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private apiUrl = 'https://localhost:7253/api/Command';

  constructor(private http: HttpClient) { }

  getCommands(connectionString : string): Observable<any> {
    let apiUrl2 = "https://localhost:7253/api/Command/command";
   // return this.http.post<any>(apiUrl2,);
    const body = { ConnectionString: connectionString };
    return this.http.post<any>(apiUrl2, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }


  //https://localhost:7100/api/Store/vendor/1

  getStoreName(idVendeur : Number):Observable<string>{
    let apiUrl ="https://localhost:7100/api/Store/vendor";

    const url = `${apiUrl}/${idVendeur}`;
    return this.http.get<string>(url,{ responseType: 'text' as 'json' });
 //    return this.http.get(url, { responseType: 'text' }).pipe(
 //      map(response => {
 //        // Parse the JSON string manually and extract the role
 //        try {
 //          const jsonResponse = JSON.parse(response);
 //          return jsonResponse.role;
 //        } catch (error) {
 //          console.error('Error parsing JSON response', error);
 //          throw new Error('Invalid JSON response');
 //        }
 //      })
 //    );
  }
}
