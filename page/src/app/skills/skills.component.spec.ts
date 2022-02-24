import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataService } from '../services/data.service';
import { SkillsComponent } from './skills.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ],
      declarations: [ SkillsComponent ],
      providers: [ DataService ]
    })
    .compileComponents();

    dataService = TestBed.get(DataService);

    spyOn(dataService, 'buscarDadosSkills').and.returnValue([]);
    spyOn(dataService, 'buscarDadosExperience').and.returnValue([]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});

