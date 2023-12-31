import { Component } from '@angular/core';
import {FilmCardComponent} from "../../../components/homeComponents/film-card/film-card.component";
import {NgForOf} from "@angular/common";
import {Film} from "../../../models/film.model";
import {FilmService} from "../../../services/film-service.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
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
export class FavorisComponent {
  films: Film[] = [];
  favoriService: FavoriService; // No need to initialize it here

  constructor(private http: HttpClient, public route: ActivatedRoute) {
    this.favoriService = new FavoriService(this.http); // Initialize in the constructor
  }

    getFavoris(): void {
        this.favoriService.getFavorisFilms().subscribe(
            (filmsData: any[]) => {
                this.films = filmsData.map(data => data); // Consider proper mapping here based on the Film model
            },
            error => {
                console.error('Error fetching favoris:', error);
            }
        );
    }

  ngOnInit(): void {
    this.getFavoris();
  }

}
