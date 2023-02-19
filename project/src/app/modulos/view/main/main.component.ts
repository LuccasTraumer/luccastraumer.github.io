import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { Skill } from '../../../models/skill';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public readonly CONSTANTES = Constantes;
  indexHabilidades = 0;
  @ViewChild('wrap') digitacao!: ElementRef<HTMLInputElement>;

  public readonly habilidades: Skill[] = [
    {
      descricao: 'Angular',
      imagem: this.CONSTANTES.PORCENTAGEM_85_SKILL,
      porcentagem: 85,
      completedProgress: false
    },
    {
      descricao: 'Spring boot',
      imagem: this.CONSTANTES.PORCENTAGEM_85_SKILL,
      porcentagem: 85,
      completedProgress: false
    },
    {
      descricao: 'Jest',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL,
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Cypress',
      imagem: this.CONSTANTES.PORCENTAGEM_50_SKILL,
      porcentagem: 50,
      completedProgress: false
    },
    {
      descricao: 'Node',
      imagem: this.CONSTANTES.PORCENTAGEM_70_SKILL,
      porcentagem: 70,
      completedProgress: false
    },
    {
      descricao: 'Javascript',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL,
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Typescript',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL,
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Scrum',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL,
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Agile',
      imagem: this.CONSTANTES.PORCENTAGEM_80_SKILL,
      porcentagem: 80,
      completedProgress: false
    }
  ];

  public habilidadeAtual: Skill = {} as Skill;


  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
  }

  desaparecerContainerScrollReveal(): boolean {
    return this.el.nativeElement.getBoundingClientRect().top < -400;
  }

  isBackgroundVisible(): boolean {
    return this.el.nativeElement.getBoundingClientRect().top !== 0;
  }

  ngOnInit(): void {
    this.habilidadeAtual = this.habilidades[this.indexHabilidades];
  }

}
