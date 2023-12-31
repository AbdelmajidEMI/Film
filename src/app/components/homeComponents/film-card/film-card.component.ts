import {Component, Input} from '@angular/core';
import {Film} from "../../../models/film.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  @Input() film!: Film;
}
