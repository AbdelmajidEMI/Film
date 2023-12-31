import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../../../services/authentification.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  private app : AuthenticationService;
  constructor(private http: HttpClient, public route: Router) {
    this.app = AuthenticationService.getInstance(this.route, this.http);
  }
  sighUpButton (username: string, password:string)  {
    this.app.signUp(username, password);
  }
}
