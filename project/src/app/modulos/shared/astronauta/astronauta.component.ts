import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-astronauta',
  templateUrl: './astronauta.component.html',
  styleUrls: ['./astronauta.component.scss']
})
export class AstronautaComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  desaparecerImagemScrollReveal() {
    return this.el.nativeElement.getBoundingClientRect().top < -890;
  }
}
