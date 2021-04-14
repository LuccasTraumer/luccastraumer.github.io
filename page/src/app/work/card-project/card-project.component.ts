import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryModel } from 'src/model/repository-model';
import { ApiGithubService } from 'src/service/api-github.service';



@Component({
  selector: 'card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  public dataApi: Observable<RepositoryModel[]>;
  private listRep: string[] = ['AirCnC', 'WazeDev', 'mmartins', 'remade_random_websites', 'twitter_data_covid-19', 'campact_huffman'];
  public repositories: Array<RepositoryModel> = [];

  constructor(private serviceApi: ApiGithubService) {
    this.loadData();
  }

  private loadData() {
    this.dataApi = this.serviceApi.getRepository(this.listRep);
    const objObservable = this.dataApi.subscribe(data => {
      data.map((repository) => {
        if (this.listRep.indexOf(repository.name) >= 0) {
          this.repositories.push(repository);
        }
      });
    }).unsubscribe;
  }
}
