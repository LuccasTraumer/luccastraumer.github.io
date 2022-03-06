import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHambComponent } from './modal-hamb.component';

describe('ModalHambComponent', () => {
  let component: ModalHambComponent;
  let fixture: ComponentFixture<ModalHambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHambComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Quando executar o metodo chnageActive deve mudar o seletor', () => {
    fixture.detectChanges();
    let isActive: boolean;
    let textContent = '';

    component.changeActive('about');
    const elementoComFoco = document.querySelectorAll('.lista__item');

    elementoComFoco.forEach(elemento => {
      if (elemento.classList.contains('active')) {
        isActive = true;
        textContent = elemento.textContent;
      }
    });

    expect(isActive).toBeTruthy();
    expect(textContent).toEqual('About me');
  });

  test('Quando executar o metodo isOpen com menu hamburguer ativo deve efetuar fluxo com sucesso', () => {
    component.isAtivo = true;

    component.isOpen();

    const body = document.querySelector('body');
    expect(body.classList.contains('all-screen')).toBeTruthy();
  });

  test('Quando executar o metodo isOpen com menu hamburguer inativo deve efetuar fluxo com sucesso', () => {
    component.isAtivo = false;

    component.isOpen();

    const body = document.querySelector('body');
    expect(body.classList.contains('all-screen')).toBeFalsy();
  });
});
