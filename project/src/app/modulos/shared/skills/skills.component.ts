import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Skill } from '../../../models/skill';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input()
  skills: Skill = {
    descricao: 'Angular',
    imagem: Constantes.PORCENTAGEM_SKILL
  } as Skill ;

  @Output()
  iteracaoClique = new EventEmitter<string>();

  public readonly CONSTANTES = Constantes;

  constructor() { }

  ngOnInit(): void {

  }

  irParaProximo() {
    this.iteracaoClique.emit('proximo');
  }

  irParaAnterior() {
    this.iteracaoClique.emit('anterior');
  }
}

