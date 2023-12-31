import {Component, Input, OnInit} from '@angular/core';
import {Film} from "../../models/film.model";
import {FilmCardComponent} from "../../components/homeComponents/film-card/film-card.component";
import {FilmCommentComponent} from "../../components/detailsComponents/film-comment/film-comment.component";
import {FilmDescriptionComponent} from "../../components/detailsComponents/film-description/film-description.component";
import {FilmService} from "../../services/film-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [FilmCardComponent, FilmCommentComponent, FilmDescriptionComponent],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent implements OnInit{

  film!: any;
  filmService: FilmService = new FilmService(this.http);

  constructor(public route : ActivatedRoute , private http : HttpClient) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.filmService.getMovieDetail(id).subscribe(data => {
      this.film=data;
      console.log(this.film);
    });
  }


}
