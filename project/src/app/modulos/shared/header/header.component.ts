import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

}
