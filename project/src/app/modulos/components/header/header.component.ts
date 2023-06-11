import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Renderer2, ViewChild } from '@angular/core';
import {CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from '@cloudinary/url-gen/actions/resize';
import { Router } from '@angular/router';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  _isMenuMobileOpen: boolean = false;
  public readonly LOGO_SRC = 'https://res.cloudinary.com/dfixlnbhd/image/upload/c_fill,h_100,w_50/LOGO_ycaeq7?_a=AKFJtDW0';

  @ViewChild('username') input!: ElementRef<HTMLInputElement>;

  menuMobileOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  myImage =  new CloudinaryImage('LOGO_ycaeq7',
    {
      cloudName: 'dfixlnbhd',
    }
  ).resize(fill().width(50).height(100));

  constructor(private router: Router, private render2: Renderer2) { }

  get isMenuMobileOpen(): boolean {
    return this._isMenuMobileOpen
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // ElementRef { nativeElement: <input> }
    console.log(this.input);
  }

  closeMenu(): void {
    this.input.nativeElement.checked = false;
  }

  // closeMenu(): void {
  //   this._isMenuMobileOpen = !this._isMenuMobileOpen;
  //   this.menuMobileOpen.emit(this._isMenuMobileOpen);
  // }

  goToHome() {
    this.closeMenu();
    this.router.navigate([Constantes.PATH_HOME]);
  }

  goToShelf() {
    this.closeMenu();
    this.router.navigate([Constantes.PATH_ARTICLES])
  }

  goToResume() {
    this.closeMenu();
    this.router.navigate([Constantes.PATH_RESUME])
  }

  goToWork() {
    this.closeMenu();
    this.router.navigate([Constantes.PATH_WORKS]);
  }
}
