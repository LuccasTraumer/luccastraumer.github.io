import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDataComponent } from './input-data.component';

describe('InputDataComponent', () => {
  let component: InputDataComponent;
  let fixture: ComponentFixture<InputDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When call alertUser should return message', () => {
    fixture = TestBed.createComponent(InputDataComponent);
    component = fixture.componentInstance;
    expect(component.alertUser()).toBe('This form is not working for now. My email: lucassj.dev@gmail.com');
  });
});
