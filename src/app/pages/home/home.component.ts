import { Component } from '@angular/core';
import {FilmCardComponent} from "../../components/homeComponents/film-card/film-card.component";
import {Film} from "../../models/film.model";
import {FilmService} from "../../services/film-service.service";
import {range} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilmCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  films:Film[] = [];
  constructor(private filmService: FilmService) {}

  ngOnInit(): void {
    this.films = this.filmService.getFilms();
  }

  protected readonly range = range;
}
