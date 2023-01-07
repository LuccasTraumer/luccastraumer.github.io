import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  private indexFerramentas = 0;

  listaFerramentas = [ "Mobile Developer", "Web Developer", "Fullstack developer", "Java developer"]

  constructor() { }

  ngOnInit(): void {
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
