import {Component, Input, OnInit} from '@angular/core';
import {FavoriService} from "../../../services/favori.service";
import {AuthenticationService} from "../../../services/authentification.service";
import {NgIf} from "@angular/common";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {response} from "express";

@Component({
  selector: 'app-film-description',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './film-description.component.html',
  styleUrl: './film-description.component.css'
})
export class FilmDescriptionComponent implements OnInit{
  @Input() film!: any;
  private favService : FavoriService;
  public user: string;
  @Input() isFavorited! : boolean;

  constructor(favService : FavoriService) {
    this.favService = favService;
    this.user = AuthenticationService.getUser();
  }


  public addFavorite(username: string, filmId: string) {
    this.favService.sendComment(username, filmId).subscribe(
      (response) => {
        this.isFavorited = true;
        console.log('Comment sent successfully!', response);
      },
      (error) => {
        console.error('Error sending comment:', error);
      }
    );
  }

  public deleteFavorite(username: string, filmId: string) {
    this.favService.deleteComment(username, filmId).subscribe(
      (response) => {
        this.isFavorited = false;
        console.log('Comment sent successfully!', response);
      },
      (error) => {
        this.isFavorited = false;
      }
    );
  }

  ngOnInit(): void {

  }


}
