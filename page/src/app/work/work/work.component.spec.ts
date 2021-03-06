import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkComponent } from './work.component';
import { CardProjectComponent } from '../card-project/card-project.component';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkComponent, CardProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // component.ngOnInit();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('quando chamar o load deve executar com sucesso', () => {
    // expect(component.ngOnInit()).toBeCalled();
  });
});
