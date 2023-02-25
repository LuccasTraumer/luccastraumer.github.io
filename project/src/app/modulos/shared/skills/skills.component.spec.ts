import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SkillsComponent } from './skills.component';
import { Skill } from '../../../models/skill';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quando metodo irParaProximo for chamado deve executar com sucesso', () => {
    component.irParaProximo();

    expect(component.firstItem).toBe(3);
    expect(component.secondItem).toBe(4);
    expect(component.thirdItem).toBe(5);
  });

  it('Quando metodo irParaAnterior for chamado deve executar com sucesso', () => {
    component.irParaAnterior();

    expect(component.firstItem).toBe(3);
    expect(component.secondItem).toBe(4);
    expect(component.thirdItem).toBe(5);
  });

  it('Quando metodo irParaAnterior for chamado deve executar com sucesso', () => {
    component.firstItem = 3;
    component.irParaAnterior();


    expect(component.firstItem).toBe(6);
    expect(component.secondItem).toBe(7);
    expect(component.thirdItem).toBe(8);
  });

  it('Quando metodo irParaAnterior for chamado deve executar com sucesso', () => {
    component.firstItem = 6;
    component.irParaAnterior();


    expect(component.firstItem).toBe(0);
    expect(component.secondItem).toBe(1);
    expect(component.thirdItem).toBe(2);
  });

  it('Quando executar o metodo initAnimated deve executar com sucesso', fakeAsync(() => {
    fixture.detectChanges();
    const skillMock = {
      imagem: '',
      descricao: '',
      porcentagem: 0,
      completedProgress: false
    } as Skill;

    component.initAnimated(skillMock);
    tick(100);

    // TODO: Finalizar teste.
  }));
});
