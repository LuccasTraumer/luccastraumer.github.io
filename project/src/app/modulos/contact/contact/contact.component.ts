import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { Constantes } from '../../../utils/constantes';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public readonly CONSTANTES = Constantes;
  public formGroup = this.formbBuilder.group({
    name: ['', [Validators.required, Validators.min(3)]],
    lastName: ['', [Validators.required, Validators.min(3)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('')]],
    message: ['', [Validators.required, Validators.min(5)]]
  })

  constructor(private renderer: Renderer2, private el: ElementRef, private formbBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
  }

  desaparecerImagem(): boolean {
    return this.el.nativeElement.getBoundingClientRect().top > 776 || this.el.nativeElement.getBoundingClientRect().top < -323;
  }

  send() {
    console.log(this.formGroup.value)
  }
}
