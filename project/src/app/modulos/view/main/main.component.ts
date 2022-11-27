import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { Skill } from '../../../models/skill';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  textoExposto: string = '';
  private index = 0;
  private letraAtual = '';
  private posicaoLetraAtual = 0;

  public readonly CONSTANTES = Constantes;
  indexHabilidades = 0;

  private habilidades: Skill[] = [
    {
      descricao: 'Angular',
      imagem: this.CONSTANTES.PORCENTAGEM_85_SKILL
    },
    {
      descricao: 'Spring boot',
      imagem: this.CONSTANTES.PORCENTAGEM_85_SKILL
    },
    {
      descricao: 'Jest',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL
    },
    {
      descricao: 'Cypress',
      imagem: this.CONSTANTES.PORCENTAGEM_50_SKILL
    },
    {
      descricao: 'Node',
      imagem: this.CONSTANTES.PORCENTAGEM_70_SKILL
    },
    {
      descricao: 'Javascript',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL
    },
    {
      descricao: 'Typescript',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL
    }
  ];

  public habilidadeAtual: Skill = {} as Skill;

  posicoes = [ "Mobile Developer", "Web Developer", "Fullstack developer", "Java developer"]

  constructor() { }

  ngOnInit(): void {
    this.habilidadeAtual = this.habilidades[this.indexHabilidades];
  }

  exibicaoSkills(evento: string) {
    if (evento === 'proximo') {
      this.indexHabilidades >= this.habilidades.length ? this.indexHabilidades = 0 : this.indexHabilidades++;
    } else {
      this.indexHabilidades <= 0 ? this.indexHabilidades = 0 : this.indexHabilidades--;
    }
    this.habilidadeAtual = this.habilidades[this.indexHabilidades];
  }
}
