import { Component } from '@angular/core';
import { Constantes } from '../../utils/Constantes';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  readonly CONSTANTES = Constantes;

  constructor() { }
}
