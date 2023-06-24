import { Component, OnInit} from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public readonly CONSTANTES = Constantes;
  constructor() {
  }

  ngOnInit(): void {

  }

}
