import { Injectable } from '@angular/core';
import {AdditionalInfo, Film} from "../models/film.model";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  API_TOKEN :any= "4daaa15d6824a11471fbb14a71363ffd";
  url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + this.API_TOKEN;

  films: Film[] = [
    {
      id: 1,
      title: "Blue Beetle",
      year: "2010",
      genres: ["Action", "Adventure", "Thriller"],
      imageUrl: "https://m.media-amazon.com/images/M/MV5BMmY1ODUzZGItNDllOS00MDBhLTg4NmUtYjU4YjUxMGNlYmMwXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX500.jpg"
    },
  ];

  additionalInfo: AdditionalInfo = {
    director: "Steven Spielberg",
    duration: 120,
    language: "English",
    country: "United States",
    rating: 9.0,
    awards: ["Academy Award for Best Picture", "Golden Globe Award for Best Director"]
    // Add other additionalInfo properties
  };



  constructor() {}

  getFilms(): Film[] {
    return this.films;
  }

  getFilmById(id: number): Film | undefined {
    return this.films.find(film => film.id === id);
  }

  getInfos(): AdditionalInfo {
    return this.additionalInfo;
  }

  getAdditionalInfo(): AdditionalInfo {
    return this.additionalInfo;
  }
}
