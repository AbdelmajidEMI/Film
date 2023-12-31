import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { forkJoin, Observable } from "rxjs";
import { map, mergeMap } from "rxjs/operators";
import {AuthenticationService} from "./authentification.service";

@Injectable({
    providedIn: 'root'
})
export class FavoriService {
    API_TOKEN: string = '4daaa15d6824a11471fbb14a71363ffd';
    base_url: string = 'https://api.themoviedb.org/3/';
    language: string = 'fr';

    constructor(private http: HttpClient) { }

    public getFilmIdsFromEndpoint(): Observable<string[]> {
        const username = AuthenticationService.getUser();
        const endpoint = `http://localhost:4201/favoris/${username}`;

        return this.http.get<any[]>(endpoint).pipe(
            map((data: any[]) => {
                // Assuming the 'filmId' is the property name in your JSON data
                return data.map(item => item.filmId);
            })
        );
    }

    public getFavorisFilms(): Observable<any[]> {
        return this.getFilmIdsFromEndpoint().pipe(
            mergeMap((ids: string[]) => {
                const movieRequests: Observable<any>[] = [];

                ids.forEach(id => {
                    const url = `${this.base_url}movie/${id}?api_key=${this.API_TOKEN}&language=${this.language}`;
                    movieRequests.push(this.http.get<any>(url));
                });

                return forkJoin(movieRequests);
            })
        );
    }

  public isFavorit(username: string, filmId: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.http.post<any>('http://localhost:4201/favoris', { username, filmId })
        .subscribe(
          (response: any) => {
            if (response && response.success) {
              resolve(true);
            } else {
              resolve(false);
            }
          },
          (error) => {
            reject(error);
          }
        );
    });
  }




  sendComment(username: string, filmId: string): Observable<any> {
    return this.http.post<any>('http://localhost:4201/favoris/add', { username, filmId });
  }

  deleteComment(username: string, filmId: string): Observable<any> {
    return this.http.post<any>('http://localhost:4201/favoris/delete', { username, filmId });
  }

}
