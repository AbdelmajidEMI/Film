import {Component, Input, OnInit} from '@angular/core';
import {FilmCardComponent} from "../../components/homeComponents/film-card/film-card.component";
import {FilmCommentComponent} from "../../components/detailsComponents/film-comment/film-comment.component";
import {FilmDescriptionComponent} from "../../components/detailsComponents/film-description/film-description.component";
import {FilmService} from "../../services/film-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AllCommentsComponent} from "../../components/detailsComponents/all-comments/all-comments.component";
import {FavoriService} from "../../services/favori.service";
import {AuthenticationService} from "../../services/authentification.service";
import {CommentService} from "../../services/comment.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-film-detail',
  standalone: true,
  imports: [FilmCardComponent, FilmCommentComponent, FilmDescriptionComponent, AllCommentsComponent, NgIf],
  templateUrl: './film-detail.component.html',
  styleUrl: './film-detail.component.css'
})
export class FilmDetailComponent implements OnInit{
  film!: any;
  filmService: FilmService = new FilmService(this.http);
  private favService : FavoriService;
  public user: string;
  isFavorited: boolean = false;
  comments: any[] = [];
  commentService: CommentService;

  constructor(public route : ActivatedRoute , private http : HttpClient, favService : FavoriService, commentService: CommentService) {
    this.favService = favService;
    this.user = AuthenticationService.getUser();
    this.commentService = commentService;
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];

    this.filmService.getMovieDetail(id).subscribe(data => {
      this.film=data;
      this.commentService.getAllComment(this.film.id).subscribe(comments => {
          this.comments = comments;
      });
      this.favService.isFavorit(this.user, this.film.id).then((isFavorited) => {
        this.isFavorited = isFavorited;
      }).catch((error) => {
        console.error('Error checking favoritism:', error);
      });
    });

  }


}
