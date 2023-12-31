import {Component, OnInit} from '@angular/core';
import {FilmCardComponent} from "../../../components/homeComponents/film-card/film-card.component";
import {NgForOf} from "@angular/common";
import {FavoriService} from "../../../services/favori.service";


@Component({
  selector: 'app-favoris',
  standalone: true,
  imports: [
    FilmCardComponent,
    NgForOf
  ],
  templateUrl: './favoris.component.html',
  styleUrl: './favoris.component.css'
})
export class FavorisComponent implements OnInit {
    films: any[];

    constructor(private favoriService: FavoriService) {
        this.films = [];
    }



    ngOnInit(): void {
        this.favoriService.getFavorisFilms().subscribe(
            films => {
                this.films = films; // Assign the films to the component property
                console.log('Favorite Films:', this.films); // Optionally log films
            },
            error => {
                console.error('Error fetching films:', error);
            }
        );
    }
}

