import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import Typed from 'typed.js';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  private indexFerramentas = 0;

  listaFerramentas = [ ]

  constructor() { }

  ngOnInit(): void {
    const options = {
      strings: ["Mobile Developer", "Web Developer", "Fullstack developer", "Java developer"],
      typeSpeed: 100,
      backSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.indexFerramentas++;
      if (this.listaFerramentas.length <= this.indexFerramentas) {
        this.indexFerramentas = 0;
      }
    }, 5000)
  }

  ferramentaAtual(): string {
    this.indexFerramentas = this.indexFerramentas++;
    return this.listaFerramentas[this.indexFerramentas];
  }
}
