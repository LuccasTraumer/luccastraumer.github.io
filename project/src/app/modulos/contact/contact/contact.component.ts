import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

}
