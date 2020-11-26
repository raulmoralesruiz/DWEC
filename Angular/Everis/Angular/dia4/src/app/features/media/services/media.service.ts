import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class MediaService {

  constructor(private http: HttpClient) {
    console.log('servicio funcionando');
  }

  // obtener diferentes títulos (contenido multimedia), buscando por nombre (título)
  getMediaInfo(name: string): Observable<any> {
    const endpoint = 'http://www.omdbapi.com/?s=' + name + '&apikey=c0abb36c';
    return this.http.get(endpoint).pipe(
      map((response) => {
        return response['Search'];
      })
    );
  }

  // obtener detalles del contenido multimedia
  getMediaDetails(id): Observable<any> {
    const endPoint = 'http://www.omdbapi.com/?i=' + id + '&apikey=c0abb36c';
    return this.http.get(endPoint);
  }


}
