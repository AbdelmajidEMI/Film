import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
export interface Credentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  API_TOKEN: string = '4daaa15d6824a11471fbb14a71363ffd';
  base_url: string = 'https://api.themoviedb.org/3/';
  popular_movies_endpoint: string = 'movie/popular';
  search_movies_endpoint: string = 'search/movie';
  language: string = 'fr';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    const url = `${this.base_url}${this.popular_movies_endpoint}?api_key=${this.API_TOKEN}&language=${this.language}`;
    return this.http.get<any>(url);
  }

  getMovieDetail(id: number): Observable<any> {
    const url = `${this.base_url}movie/${id}?api_key=${this.API_TOKEN}&language=${this.language}`;
    return this.http.get<any>(url);
  }

  getMoviesByKey(key: string): Observable<any> {
    const url = `${this.base_url}${this.search_movies_endpoint}?api_key=${this.API_TOKEN}&language=${this.language}&query=${key}&page=1`;
    return this.http.get<any>(url);
  }

  searchMoviesByKey(key: string): Observable<any> {
    const url = `${this.base_url}${this.search_movies_endpoint}?api_key=${this.API_TOKEN}&language=${this.language}&query=${key}&page=1`;
    return this.http.get<any>(url);
  }
}
