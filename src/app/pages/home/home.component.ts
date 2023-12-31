import {Component, OnInit} from '@angular/core';
import {FilmCardComponent} from "../../components/homeComponents/film-card/film-card.component";
import {Film} from "../../models/film.model";
import {FilmService} from "../../services/film-service.service";
import {NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmCardComponent, NgForOf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  films: Film[] = [];
  filmService: FilmService; // No need to initialize it here

  constructor(private http: HttpClient, public route: ActivatedRoute) {
    this.filmService = new FilmService(this.http); // Initialize in the constructor
  }

  getAllFilms = () => {
    this.filmService.getMovies().subscribe(data => {
      this.films = data.results;
    });
  }

  getAllFilmsByKeyxord = (keyw: string) => {
    this.filmService.searchMoviesByKey(keyw).subscribe(data => {
      this.films = data.results;
    });
  }

  ngOnInit(): void {
    const keyword = this.route.snapshot.params['keyword'];
    if (keyword === undefined) {
      this.getAllFilms();
    } else {
      this.getAllFilmsByKeyxord(keyword);
    }
  }
}
