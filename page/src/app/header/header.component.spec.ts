import { ViewportScroller } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Constantes } from '../../utils/Constantes';
import { HttpClientModule } from '@angular/common/http';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let viewportScroller: ViewportScroller;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ HeaderComponent ],
      providers: [ ViewportScroller ]
    })
    .compileComponents();

    viewportScroller = TestBed.get(ViewportScroller);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Quando executar o click deve alterar o estado do menu Hamburguer', () => {
    component.mudarEstadoMenuHamburguer();

    expect((component as any).menuHambuguerAberto).toBeTruthy();
  });

  test('Quanod executar o getManuHamburguer deve retornar uma string', () => {
    const response = component.getManuHamburguer();

    expect(Constantes.PATH_ICON_BLACK_MENU_HAMBURGUER).toHaveBeenCalled();
    expect(response).toEqual('icone');
  });

  test('Quando executar o metodo onClickScroll deve efetuar o scroll da pagina', () => {
    spyOn(viewportScroller, 'scrollToAnchor');
    spyOn(component, 'clickMenu');

    component.onClickScroll('');

    expect(viewportScroller.scrollToAnchor).toHaveBeenCalled();
    expect(component.clickMenu).toHaveBeenCalled();
  });

  test('Quando executar o metodo clickMenu deve efetuar alteração do menuHambuguerAberto', () => {
    component.clickMenu();

    expect((component as any).menuHambuguerAberto).toBeTruthy();
  });
});

