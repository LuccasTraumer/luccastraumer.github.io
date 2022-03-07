import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardJob } from '../model/card-job';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.card = new CardJob(2019, 'Campinas', 'Descrição', 'Desenvolvedor de Software', 'CINADT');
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Quando executar o card sem ano final deve preencher o ternario', () => {
    component.card.anoFinal = null;

    const data = document.querySelector('.data');
    expect(data.textContent).toEqual(' 2019 - Present ');
  });
});
