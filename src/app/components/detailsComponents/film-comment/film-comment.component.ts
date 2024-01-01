import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommentService} from "../../../services/comment.service";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../../../services/authentification.service";
import {response} from "express";

@Component({
  selector: 'app-film-comment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './film-comment.component.html',
  styleUrl: './film-comment.component.css'
})
export class FilmCommentComponent {

  private commentService : CommentService;
  public comment!:string;
  public username = AuthenticationService.getUser();
  @Input() filmId!: string;
  constructor(commentService : CommentService, private http : HttpClient) {
    this.commentService = new CommentService(http);
  }


  public submitComment() {

    this.commentService.saveComment(this.username, this.filmId, this.comment).subscribe(
        response => {
          console.log(response)
        },
        error => {
          console.log(error)
        }
    )
    this.comment = '';
  }

}
