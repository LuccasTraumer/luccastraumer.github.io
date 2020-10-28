import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentacaoImageDataComponent } from './apresentacao-image-data.component';

describe('ApresentacaoImageDataComponent', () => {
  let component: ApresentacaoImageDataComponent;
  let fixture: ComponentFixture<ApresentacaoImageDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentacaoImageDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentacaoImageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
