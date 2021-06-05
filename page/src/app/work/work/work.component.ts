import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryModel } from 'src/model/repository-model';
import { ApiGithubService } from 'src/service/api-github.service';
import { Constantes } from '../../../utils/Constantes';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  public dataApi: Observable<RepositoryModel[]>;
  private listRep: string[] = ['AirCnC', 'WazeDev', 'mmartins', 'campact_huffman', 'twitter_data_covid-19', 'remade_random_websites'];
  public repositories: Array<RepositoryModel> = [];

  constructor(private serviceApi: ApiGithubService) { }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.dataApi = this.serviceApi.getRepository(this.listRep);
    const objObservable = this.dataApi.subscribe(data => {
      data.map((repository) => {
        if (this.listRep.indexOf(repository.name) >= 0) {
          repository.image = this.setImageFlip(repository.name);
          this.repositories.push(repository);
        }
      });
    }).unsubscribe;
  }

  setImageFlip(name) {
    let pathImage = '';

    switch(name) {
      case this.listRep[0]:
        pathImage = Constantes.PATH_IMAGE_CARD_AIRCNC;
        break;
      case this.listRep[1]:
        pathImage = Constantes.PATH_IMAGE_CARD_WAZEDEV;
        break;
      case this.listRep[2]:
        pathImage = Constantes.PATH_IMAGE_CARD_MAIARA;
        break;
      case this.listRep[3]:
        pathImage = Constantes.PATH_IMAGE_CARD_COMPACT_HUFFMAN;
        break;
      case this.listRep[2]:
        pathImage = Constantes.PATH_IMAGE_CARD_COVID;
        break;
      case this.listRep[2]:
        pathImage = Constantes.PATH_IMAGE_CARD_REMADE;
        break;
    }

    return pathImage;
  }
}
