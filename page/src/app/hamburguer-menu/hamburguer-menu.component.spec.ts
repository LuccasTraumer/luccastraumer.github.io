import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburguerMenuComponent } from './hamburguer-menu.component';
import { ViewportScroller } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import spyOn = jest.spyOn;

describe('HamburguerMenuComponent', () => {
  let component: HamburguerMenuComponent;
  let fixture: ComponentFixture<HamburguerMenuComponent>;
  let viewportScroller: ViewportScroller;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ HamburguerMenuComponent ],
      providers: [ ViewportScroller ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburguerMenuComponent);
    component = fixture.componentInstance;

    viewportScroller = TestBed.inject(ViewportScroller);
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Quando executar o metodo onClickScroll deve efetuar o fluxo com sucesso', () => {
    spyOn(viewportScroller, 'scrollToAnchor');
    spyOn(component.fecharMenu, 'emit');

    component.onClickScroll('mock');

    expect(viewportScroller.scrollToAnchor).toHaveBeenCalled();
    expect(component.fecharMenu.emit).toHaveBeenCalled();
  });
});
