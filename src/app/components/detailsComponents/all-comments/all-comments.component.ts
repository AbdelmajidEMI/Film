import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {AuthenticationService} from "../../../services/authentification.service";

@Component({
  selector: 'app-all-comments',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './all-comments.component.html',
  styleUrl: './all-comments.component.css'
})
export class AllCommentsComponent {
  @Input() comments: any[] = [];
  username : string = AuthenticationService.getUser();
}
