import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {FilmDetailComponent} from "./pages/details/film-detail.component";
import {LogInComponent} from "./pages/authentification/log-in/log-in.component";
import {SignUpComponent} from "./pages/authentification/sign-up/sign-up.component";
import {inject} from "@angular/core";
import {AuthenticationService} from "./services/authentification.service";
import {FavorisComponent} from "./pages/favoris/favoris/favoris.component";

export const routes: Routes = [
  { path: 'search/:keyword', component: HomeComponent, canActivate: [() => AuthenticationService.canActivate()]},
  { path: '', component: HomeComponent, canActivate: [() => AuthenticationService.canActivate()] },
  { path: 'auth/authL', component : LogInComponent },
  { path: 'auth/authS', component : SignUpComponent },
  { path: 'detail/:id', component: FilmDetailComponent, canActivate: [() => AuthenticationService.canActivate()] },
  { path: 'favoris', component: FavorisComponent, canActivate: [() => AuthenticationService.canActivate()] },
];
