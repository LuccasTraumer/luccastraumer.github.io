import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import CardComponent from "../../../shared-ui/card/card.component";
import {Router, RouterModule} from "@angular/router";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {Constantes} from "../../../utils/constantes";

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    CardComponent,
    SkeltonComponent,
    RouterModule
  ],
  providers:[
    Router
  ],
  styleUrls: ['./work.component.scss']
})
export default class WorkComponent {
  private router: Router = inject(Router);
  linkImage: string = 'https://upload.wikimedia.org/wikipedia/commons/1/10/CI%26T_Logo.png';

  goToWork(event: string) {
    this.router.navigate([`/${Constantes.PATH_WORKS}/${event}`])
      .then(() => {});
  }
}
