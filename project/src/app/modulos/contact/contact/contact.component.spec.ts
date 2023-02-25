import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ElementRef, Renderer2 } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  let render: Renderer2;
  let elementRef: ElementRef;
  let formBuild: FormBuilder;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [ReactiveFormsModule],
      providers: [Renderer2, ElementRef, FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    render = TestBed.inject(Renderer2);
    elementRef = TestBed.inject(ElementRef);
    formBuild = TestBed.inject(FormBuilder);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Quando chamar send deve executar com sucesso', () => {
    component.send();
  });
});
