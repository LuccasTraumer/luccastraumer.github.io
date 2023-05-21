import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfloioComponent } from './portfloio.component';

describe('PortfloioComponent', () => {
  let component: PortfloioComponent;
  let fixture: ComponentFixture<PortfloioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfloioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfloioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
