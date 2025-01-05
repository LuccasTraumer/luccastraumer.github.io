import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResumeComponent } from './new-resume.component';
import {of} from "rxjs";
import {ResumeServiceService} from "./service/resume-service.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NewResumeComponent', () => {
  let component: NewResumeComponent;
  let fixture: ComponentFixture<NewResumeComponent>;
  let service: ResumeServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewResumeComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewResumeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ResumeServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('when method oninit was executed then works', () => {
    jest.spyOn(service, 'getDataResume').mockReturnValue(of({
      otherTechs: '',
      work: '',
      techs: '',
      personal: {
        city: '',
        state: '',
        personalPage: '',
        email: '',
        name: '',
        lastName: '',
        experience: ''
      }
    }));

    component.ngOnInit();

    expect(service.getDataResume).toBeCalledTimes(1);
  });
});
