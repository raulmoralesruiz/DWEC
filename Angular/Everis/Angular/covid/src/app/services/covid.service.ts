import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}

  // Método que devuelve la lista de países
  listCountries(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(
      map((response) => {
        return response['Countries'];
      })
    );
  }

  // Método que devuelve la lista de datos generales
  listGeneral(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(
      map((response) => {
        return response['Global'];
      })
    );
  }

  // Método que devuelve la lista de España
  listSpain(): Observable<any> {
    const endpoint = 'https://api.covid19api.com/summary';
    return this.http.get(endpoint).pipe(
      map((response) => {
        return response['Countries'].filter((country) => {
          return country.Country === 'Spain';
        });
      })
    );
  }
}
