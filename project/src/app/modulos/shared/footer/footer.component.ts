import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {
  }

}
