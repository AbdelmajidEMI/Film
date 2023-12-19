import {Component, Input} from '@angular/core';
import {Film} from "../../../models/film.model";

@Component({
  selector: 'app-film-card',
  standalone: true,
  imports: [],
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.css'
})
export class FilmCardComponent {
  @Input() film!: Film;
}
