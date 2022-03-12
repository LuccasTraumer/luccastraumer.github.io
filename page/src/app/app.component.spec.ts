import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent,
      ],
      providers: [ DataService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create the app', () => {
    expect(component).toBeTruthy();
  });

  test(`should have as title 'page'`, () => {
    expect(component.title).toEqual('page');
  });

  test('Quando executar o metodo mudarElementoPrincipal deve efetuar fluxo com sucesso', () => {
    component.mudarElementoPrincipal('elemento');

    expect(component.elementoEmFoco).toEqual('elemento');
  });

  test('Quando executar o metodo isMenuOpen com open true deve efetuar o fluxo de sucesso', () => {
    component.isMenuOpen(true);

    const bodyElement = document.querySelector('body');
    expect(component.isOpenMenuHamburguer).toBeTruthy();
    expect(bodyElement.classList.contains('all-screen')).toBeTruthy();
  });

  test('Quando executar o metodo isMenuOpen com open false deve efetuar o fluxo de remocao', () => {
    component.isMenuOpen(false);

    const bodyElement = document.querySelector('body');
    expect(component.isOpenMenuHamburguer).toBeFalsy();
    expect(bodyElement.classList.contains('all-screen')).toBeFalsy();
  });

  test('Quando executar o metodo chnageActive deve mudar o seletor', () => {
    fixture.whenStable().then();

    const mock = {
      classList: {
        remove: jest.fn(),
        add: jest.fn()
      },
      textContent: 'about'
    };
    spyOn(document, 'querySelectorAll').and.returnValue([mock]);
    component.changeActive('about');

    expect(component.elementoEmFoco).toBe('about');
  });
});
