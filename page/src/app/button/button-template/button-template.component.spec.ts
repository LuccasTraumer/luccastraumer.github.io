import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTemplateComponent } from './button-template.component';

describe('ButtonTemplateComponent', () => {
  let component: ButtonTemplateComponent;
  let fixture: ComponentFixture<ButtonTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('quando iniciado deve validar se o Input foi definido', () => {
    component.redirectLink = '#';
    fixture.detectChanges();

    expect(component.onClickScroll).toBeCalled();
  });
});
