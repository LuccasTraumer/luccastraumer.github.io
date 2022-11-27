import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { Skill } from '../../../models/skill';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  textoExposto: string = '';
  private indexFerramentas = 0;

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

  listaFerramentas = [ "Mobile Developer", "Web Developer", "Fullstack developer", "Java developer"]

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  incluirHabilidade() {
    console.log()

    let indexItem = 0;
    for(indexItem; indexItem <= this.listaFerramentas.length; indexItem++) {

      // this.el.nativeElement.querySelector('.wrap').innerText = '';
      // console.log(this.listaFerramentas[indexItem]);
      // this.incluirLetras(this.listaFerramentas[indexItem]);
      // if (indexItem == this.listaFerramentas.length) {
      //   indexItem = 0;
      // }
    }
  }

  incluirLetras(item: string) {
    console.log(item);
    setInterval(() => {
      // Object.keys(item).forEach((letra) => {
      //   this.el.nativeElement.querySelector('.wrap').innerText = this.el.nativeElement.querySelector('.wrap').innerText
      //     + item.charAt(Number.parseInt(letra));
      // });

      // console.log(item.length);
      let indexPalavra = 0;
      let tamanhoPalavra = item.length;

      for(indexPalavra; indexPalavra <= tamanhoPalavra; indexPalavra++) {
        console.log(item.charAt(indexPalavra));
        this.el.nativeElement.querySelector('.wrap').innerText = this.el.nativeElement.querySelector('.wrap').innerText
            + item.charAt(indexPalavra);

        if(indexPalavra == tamanhoPalavra) {
          console.log('Entrei aqui')
          this.removerLetras(item);
        }
      }
    }, 2500);
  }

  removerLetras(item: string) {
    let ultimoIndexPalavra = 0;
    let tamanhoTotalPalavra = this.el.nativeElement.querySelector('.wrap').innerText.length;
    if (tamanhoTotalPalavra > ultimoIndexPalavra) {
      setTimeout(() => {
        Object.keys(item).forEach((letra) => {
          this.el.nativeElement.querySelector('.wrap').innerText = this.el.nativeElement.querySelector('.wrap').innerText.substring(ultimoIndexPalavra, tamanhoTotalPalavra--);
        });
      }, 2500);
    }
  }

  ngOnInit(): void {
    this.habilidadeAtual = this.habilidades[this.indexHabilidades];
    this.incluirHabilidade();
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
