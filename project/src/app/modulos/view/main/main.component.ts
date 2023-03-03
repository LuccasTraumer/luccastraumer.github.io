import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
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
      porcentagem: 85,
      completedProgress: false
    },
    {
      descricao: 'Spring boot',
      porcentagem: 85,
      completedProgress: false
    },
    {
      descricao: 'Jest',
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Cypress',
      porcentagem: 50,
      completedProgress: false
    },
    {
      descricao: 'Node',
      porcentagem: 70,
      completedProgress: false
    },
    {
      descricao: 'Javascript',
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Typescript',
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Scrum',
      porcentagem: 80,
      completedProgress: false
    },
    {
      descricao: 'Agile',
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
