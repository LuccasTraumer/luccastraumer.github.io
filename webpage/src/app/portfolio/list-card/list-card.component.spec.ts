import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCardComponent } from './list-card.component';
import { ApiGithubService } from '../api-github.service';

describe('ListCardComponent', () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When get someone method should be return a url', () => {
    it.each([
      ['AirCnC', 'https://raw.githubusercontent.com/LuccasTraumer/AirCnC/master/Images_Web/Web_Screen_Login.jpg'],
      ['WazeDev', 'https://raw.githubusercontent.com/LuccasTraumer/WazeDev/master/psReadme/Web/createDevGif.gif'],
      ['mmartins', 'https://raw.githubusercontent.com/LuccasTraumer/mmartins/master/imgs/desktop-feed.jpg'],
      ['remade_random_websites', 'https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/novo/Screenshot_2020-09-06%20One%20Page%20Love.png?token=AD5NGI2E6FV37GWDSKLNI2C7L3JOK'],
      ['twitter_data_covid-19', 'https://raw.githubusercontent.com/LuccasTraumer/twitter_data_covid-19/master/Screenshot_2020-09-05%20Atualiza%C3%A7%C3%A3o%20sobre%20COVID-19%20(%20againstCovi19)%20Twitter.png'],
      ['campact_huffman', 'https://raw.githubusercontent.com/LuccasTraumer/campact_huffman/main/1000px-Huffman_tree.svg.png']
      ]
    )
      ('When call getLinkAirCnC should be return url', (repositoryName, urlRepository) => {
      fixture = TestBed.createComponent(ListCardComponent);
      component = fixture.componentInstance;
      expect(component.getImageRepository(repositoryName)).toBe(urlRepository);
    });
  });
});
