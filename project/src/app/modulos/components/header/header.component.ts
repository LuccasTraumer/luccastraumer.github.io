import { Component, EventEmitter, OnInit } from '@angular/core';
import {CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  _isMenuMobileOpen: boolean = false;
  public readonly LOGO_SRC = 'https://res.cloudinary.com/dfixlnbhd/image/upload/c_fill,h_100,w_50/LOGO_ycaeq7?_a=AKFJtDW0';

  menuMobileOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  myImage =  new CloudinaryImage('LOGO_ycaeq7',
    {
      cloudName: 'dfixlnbhd',
    }
  ).resize(fill().width(50).height(100));

  constructor() { }

  get isMenuMobileOpen(): boolean {
    return this._isMenuMobileOpen
  }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this._isMenuMobileOpen = !this._isMenuMobileOpen;
    this.menuMobileOpen.emit(this._isMenuMobileOpen);
  }
}
