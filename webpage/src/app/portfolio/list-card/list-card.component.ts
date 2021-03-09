import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiGithubService } from '../api-github.service';
import { RepositoryModel } from '../repository-model';

@Component({
  selector: 'list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {

  public dataApi: Observable<RepositoryModel[]>;
  private listRep: string[] = ['AirCnC', 'WazeDev', 'mmartins', 'remade_random_websites', 'twitter_data_covid-19', 'campact_huffman'];
  public repositories: Array<RepositoryModel> = [];

  constructor(private service: ApiGithubService) {
    this.loadData();
  }

  private loadData() {
    this.dataApi = this.service.getRepository(this.listRep);
    let objObservable = this.dataApi.subscribe(data => {
      data.map((repository) => {
        if (this.listRep.indexOf(repository.name) >= 0) {
          repository.image = this.getImageRepository(repository.name);
          this.repositories.push(repository);
        }
      });
    }).unsubscribe;
  }

  public getImageRepository(nameRep: string): string {
    let urlImage: string;

    switch (nameRep){
      case 'AirCnC':
        urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/AirCnC/master/Images_Web/Web_Screen_Login.jpg';
        break;
      case 'WazeDev':
        urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/WazeDev/master/psReadme/Web/createDevGif.gif';
        break;
      case 'mmartins':
        urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/mmartins/master/imgs/desktop-feed.jpg';
        break;
      case 'remade_random_websites':
        urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/remade_random_websites/master/novo/Screenshot_2020-09-06%20One%20Page%20Love.png?token=AD5NGI2E6FV37GWDSKLNI2C7L3JOK';
        break;
      case 'twitter_data_covid-19':
        urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/twitter_data_covid-19/master/Screenshot_2020-09-05%20Atualiza%C3%A7%C3%A3o%20sobre%20COVID-19%20(%20againstCovi19)%20Twitter.png';
        break;
      case 'campact_huffman':
        urlImage = 'https://raw.githubusercontent.com/LuccasTraumer/campact_huffman/main/1000px-Huffman_tree.svg.png';
        break;
    }
    return urlImage;
  }
}
