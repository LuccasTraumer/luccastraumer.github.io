import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Constantes} from '../../../../utils/constantes';
import {CommonModule} from "@angular/common";
import ButtonComponent from "../../../../shared-ui/button/button.component";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
  providers:[
    Router
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProjectsComponent {
  private router: Router = inject(Router);

  redirectArticle(event: any): void {
    this.router.navigate([Constantes.PATH_ARTICLES])
  }

  redirectToWork(event: any): void {
    this.router.navigate([Constantes.PATH_WORKS]);
  }
}
