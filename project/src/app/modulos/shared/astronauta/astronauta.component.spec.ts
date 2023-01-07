import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautaComponent } from './astronauta.component';

describe('AstronautaComponent', () => {
  let component: AstronautaComponent;
  let fixture: ComponentFixture<AstronautaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstronautaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
