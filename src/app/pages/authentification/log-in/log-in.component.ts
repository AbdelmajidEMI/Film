import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentification.service";
import {HttpClient} from "@angular/common/http";
import {FilmService} from "../../../services/film-service.service";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  auth: AuthenticationService;

  constructor(private http : HttpClient, private route : Router) {
    this.auth = AuthenticationService.getInstance(this.route, this.http)
  }
  logInButton (username: string, password:string)  {
    this.auth.logIn(username, password);
  }
}
