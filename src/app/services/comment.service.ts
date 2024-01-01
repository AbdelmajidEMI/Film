import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private comments: any[] = [];

  constructor(private http: HttpClient) { }



  getAllComment(filmId: string): Observable<any> {
      return this.http.get<any>(`http://localhost:4201/comment/${filmId}`).pipe(
          map(data => {
              this.comments = data; // Assuming the response directly contains the list of comments
              return this.comments;
          })
      );
  }
  saveComment(username: string, filmId: string, comment: string): Observable<any> {
    return this.http.post<any>('http://localhost:4201/comment/add',
        {
          username,
          filmId,
          comment
          }
      );
  }

}
