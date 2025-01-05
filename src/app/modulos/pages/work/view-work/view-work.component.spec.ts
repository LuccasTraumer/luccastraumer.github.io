import { ComponentFixture, TestBed } from '@angular/core/testing';

import ViewWorkComponent from './view-work.component';
import {CloudinaryModule} from "@cloudinary/ng";

describe('ViewWorkComponent', () => {
  let component: ViewWorkComponent;
  let fixture: ComponentFixture<ViewWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewWorkComponent ],
      imports: [
        CloudinaryModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
