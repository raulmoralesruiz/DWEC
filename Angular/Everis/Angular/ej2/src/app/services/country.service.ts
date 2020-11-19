import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor( private http: HttpClient ) { }

  listCountries(): Observable<any> {
    const endpoint = 'https://restcountries.eu/rest/v2/all';
    return this.http.get(endpoint);
  }

  // listSpain(): Observable<any> {
  //   const endpoint = 'https://restcountries.eu/rest/v2/all';
  //   return this.http.get(endpoint).
  //   pipe( map( countries => {
  //     countries.filter( country => {
  //       return country.name === 'Spain';
  //     });
  //   } ) );
  // }

  listSpainOnly(): Observable<any> {
    const endpoint = 'https://restcountries.eu/rest/v2/name/spain';
    return this.http.get(endpoint);
  }
}

