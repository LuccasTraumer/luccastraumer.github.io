import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceCardComponent } from './introduce-card.component';
import { HeaderComponent } from '../header/header.component';
import { DataService } from '../services/data.service';
import { HttpClientModule } from '@angular/common/http';

describe('IntroduceCardComponent', () => {
  let component: IntroduceCardComponent;
  let fixture: ComponentFixture<IntroduceCardComponent>;
  let dataService: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ IntroduceCardComponent, HeaderComponent ],
      providers: [ DataService ],
    })
    .compileComponents();

    dataService = TestBed.get(DataService);
    spyOn(dataService, 'buscarDadosSocialMedia').and.returnValue([]);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroduceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});

