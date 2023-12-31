import { ComponentFixture, TestBed } from '@angular/core/testing';

import WorkComponent from './work.component';
import {CloudinaryModule} from "@cloudinary/ng";

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkComponent ],
      imports: [
        CloudinaryModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
