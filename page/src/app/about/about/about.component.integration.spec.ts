import { AboutComponent } from './about.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('Quando card preparado deve emitir evento de click do Botao', async () => {
    fixture.whenStable();
    const compElements: HTMLElement = fixture.nativeElement;

    const card = compElements.querySelector('app-card');
    card.dispatchEvent(new Event('click'));

    expect(component.pegarNovoFocoCard).toHaveBeenCalled();
  });

  // test('Quando card preparado deve emitir evento de click do Botao', () => {
  //
  // });
});
