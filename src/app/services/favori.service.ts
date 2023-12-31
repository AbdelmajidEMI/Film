import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoriService {
  API_TOKEN: string = '4daaa15d6824a11471fbb14a71363ffd';
  base_url: string = 'https://api.themoviedb.org/3/';
  language: string = 'fr';

  ids: string[] = ["0", "1", "2"];
  constructor(private http: HttpClient) { }

    public getFavorisFilms(): Observable<any[]> {
        // Assuming you have a list of movie IDs in this.ids
        const idsString: string = this.ids.join(',');

        const url = `${this.base_url}movie/${idsString}?api_key=${this.API_TOKEN}&language=${this.language}`;

        return this.http.get<any[]>(url);
    }


}
