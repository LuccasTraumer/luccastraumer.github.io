import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  private _email = 'lucassj.dev@gmail.com'
  private _twitter = '@luccastraumer'

  constructor(private router: Router) { }

  ngOnInit(): void {
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
    return new Date().getFullYear();
  }
}
