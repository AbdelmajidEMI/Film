import {Component, Input} from '@angular/core';
import {Film} from "../../../models/film.model";
import {join} from "node:path";

@Component({
  selector: 'app-film-description',
  standalone: true,
  imports: [],
  templateUrl: './film-description.component.html',
  styleUrl: './film-description.component.css'
})
export class FilmDescriptionComponent {
  @Input() film!: any;

}
