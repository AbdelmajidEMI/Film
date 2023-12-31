import { Component } from '@angular/core';
import { Router, RouterLink} from "@angular/router";
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthenticationService, Credentials} from "../../../services/authentification.service";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  private app: AuthenticationService;
  username: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http : HttpClient
  ) {
    this.app = AuthenticationService.getInstance(this.router, this.http);
    this.username = "" + AuthenticationService.getUser();

  }


  logout() {
    this.app.logout();
  }

  checkoutForm = this.formBuilder.group({
    search: '',
  });

  searchMovies() {
    const searchValue = this.checkoutForm.value.search;
    this.router.navigate(['/search', searchValue]).then(r => true);
    this.checkoutForm.reset();
  }
  authenticated() { return AuthenticationService.isAuthenticated(); }
}
