import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Constantes } from '../../../utils/constantes';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public readonly CONSTANTES = Constantes;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
  }

  desaparecerImagem(): boolean {
    return this.el.nativeElement.getBoundingClientRect().top > 776 || this.el.nativeElement.getBoundingClientRect().top < -323;
  }
}
