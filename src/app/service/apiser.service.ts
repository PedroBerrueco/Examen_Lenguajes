import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserService {

  url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

  constructor( private http: HttpClient ) { }

  getApi(): Observable<any> {
    return this.http.get(this.url);
  }
}
