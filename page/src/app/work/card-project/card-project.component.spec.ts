import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectComponent } from './card-project.component';

describe('CardProjectComponent', () => {
  let component: CardProjectComponent;
  let fixture: ComponentFixture<CardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('quando chamar o metodo de click do link', () => {
    component.longDescription = false;

    component.clickButton(event);

    expect(component.longDescription).toBeTruthy();
  });
});
