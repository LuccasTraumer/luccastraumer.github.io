import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  readonly CONSTANTES = Constantes;
  constructor() { }

  ngOnInit(): void {
  }

  getDate(): number {
    return new Date().getFullYear();
  }
}
