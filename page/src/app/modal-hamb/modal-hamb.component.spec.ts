import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHambComponent } from './modal-hamb.component';

describe('ModalHambComponent', () => {
  let component: ModalHambComponent;
  let fixture: ComponentFixture<ModalHambComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalHambComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHambComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
