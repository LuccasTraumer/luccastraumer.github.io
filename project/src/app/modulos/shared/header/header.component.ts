import { Component, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  @Input()
  public isWithBackground = false;

  constructor() { }

  ngOnInit(): void {
  }
}
