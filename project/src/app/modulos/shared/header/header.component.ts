import { Component, Input } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public readonly CONSTANTES = Constantes;

  @Input()
  public isWithBackground = false;

  constructor() { }

}
