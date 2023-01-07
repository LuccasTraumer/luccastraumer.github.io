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

  exibicaoSkills(evento: string) {
    if (evento === 'proximo') {
      this.indexHabilidades >= this.habilidades.length ? this.indexHabilidades = 0 : this.indexHabilidades++;
    } else {
      this.indexHabilidades <= 0 ? this.indexHabilidades = 0 : this.indexHabilidades--;
    }
    this.habilidadeAtual = this.habilidades[this.indexHabilidades];
  }

}
