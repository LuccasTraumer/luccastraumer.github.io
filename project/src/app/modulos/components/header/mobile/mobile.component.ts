import { Component, EventEmitter, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  @Input()
  isMenuOpen!: boolean;

  isMenuMobileOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(): void {
    this.isMenuMobileOpen.emit(this.isMenuOpen);
    // console.warn(this._isMenuClosed);
  }
}
