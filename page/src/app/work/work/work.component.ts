import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositoryModel } from 'src/model/repository-model';
import { ApiGithubService } from 'src/service/api-github.service';

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
          this.repositories.push(repository);
        }
      });
    }).unsubscribe;
  }

}
