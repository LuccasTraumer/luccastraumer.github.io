import { Component, OnInit } from '@angular/core';
import { DadosRedesSociais } from '../../model/dados-redes-sociais.model';
import { DataService } from '../services/data.service';
import {Constantes} from '../../utils/Constantes';

@Component({
  selector: 'app-introduce-card',
  templateUrl: './introduce-card.component.html',
  styleUrls: ['./introduce-card.component.scss']
})
export class IntroduceCardComponent implements OnInit {
  readonly CONSTANTES = Constantes;

  redeSociais: Array<DadosRedesSociais>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.redeSociais = this.dataService.buscarDadosSocialMedia();
  }
}
