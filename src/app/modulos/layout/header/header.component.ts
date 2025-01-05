import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  Renderer2,
  ViewChild
} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Constantes} from '../../utils/constantes';
import {LoaderService} from "../../shared-ui/loader/service/loader.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports:[
    RouterModule
  ],
  providers: [
    Router
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HeaderComponent {
  private router: Router = inject(Router)
  // private render2: Renderer2 = inject(Renderer2);
  private loader: LoaderService = inject(LoaderService);
  @ViewChild('username') input!: ElementRef<HTMLInputElement>;

  closeMenu(): void {
    if(this.input.nativeElement.checked)
      this.input.nativeElement.checked = false;
  }

  goToHome() {
    this.closeMenu();
    this.router.navigateByUrl(Constantes.PATH_HOME)
      .then(() => this.loader.setStateLoader(true)).finally(() => this.loader.setStateLoader(false));
  }

  goToShelf() {
    this.closeMenu();
    this.router.navigate([Constantes.PATH_ARTICLES]);
  }

  goToResume() {
    this.closeMenu();
    this.router.navigateByUrl(Constantes.PATH_RESUME)
      .then(() => this.loader.setStateLoader(true)).finally(() => this.loader.setStateLoader(false));
  }

  goToWork() {
    this.closeMenu();
    this.router.navigateByUrl(`${Constantes.PATH_WORKS}`)
      .then(() => this.loader.setStateLoader(true)).finally(() => this.loader.setStateLoader(false));;
  }
}
