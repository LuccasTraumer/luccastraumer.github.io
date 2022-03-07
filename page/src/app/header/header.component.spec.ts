import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import spyOn = jest.spyOn;

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
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

  test('Quando executar o metodo changeManuHamb deve efetuar fluxo com sucesso', () => {
    spyOn(component.isHamburguerAberto, 'emit');

    component.changeManuHamb();
    expect(component.isHamburguerAberto.emit).toHaveBeenCalled();
    expect(component.isMenuHamburguerOpen).toBeTruthy();
  });
});
