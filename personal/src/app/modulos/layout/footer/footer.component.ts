import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {Constantes} from '../../utils/constantes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports:[
    RouterModule
  ],
  providers:[
    Router
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class FooterComponent implements OnInit {
  private _email = 'lucassj.dev@gmail.com'
  private _twitter = '@luccastraumer'
  private router: Router = inject(Router);
  year!: number;

  ngOnInit(): void {
    this.year = new Date().getFullYear();
  }

  goToWork() {
    this.router.navigate([Constantes.PATH_WORKS])
  }

  goToShelf() {
    this.router.navigate([Constantes.PATH_ARTICLES])
  }

  goToResume() {
    this.router.navigate([Constantes.PATH_RESUME])
  }

  get email() {
    return this._email;
  }

  get twitter() {
    return this._twitter;
  }

  getYear() {
  }
}
