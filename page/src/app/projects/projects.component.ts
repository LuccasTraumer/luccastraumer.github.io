import { Component, OnInit } from '@angular/core';
import {Constantes} from '../../utils/Constantes';
import {DataService} from '../services/data.service';
import { RepositoryModel } from '../../model/repository-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  readonly CONSTANTES = Constantes;
  public dataApi: Observable<RepositoryModel[]>;
  private listRep: string[] = ['tcc-fed-fio-navalha',
    'tcc-srv-fio-navalha', 'algorithms', 'AirCnC', 'WazeDev', 'campact_huffman'];
  public repositories: Array<RepositoryModel> = [];

  projectShow: RepositoryModel;
  private index = 0;

  constructor(private dataService: DataService) {
    this.preencherDadosFrontendMentor();
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): any{
    return this.dataService
      .buscarDadosGithub(this.listRep)
      .subscribe(data => {
      data.map((repository) => {
        if (this.listRep.indexOf(repository.name) >= 0) {
          this.repositories.push(repository);
          this.projectShow = this.repositories[this.index];
        }
      });
    }).unsubscribe;
  }

  private preencherDadosFrontendMentor(): void{
    const ecomerce = new RepositoryModel();
    ecomerce.name = 'E-commerce product page';
    ecomerce.html_url = 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/ecommerce-product-page-main';
    ecomerce.description = 'This is a solution to the E-commerce product page challenge on Frontend Mentor. Frontend ' +
      'Mentor challenges help you improve your coding skills by building realistic projects.';
    ecomerce.image = '../../assets/imageProjects/ecomerce-mobile.png';

    const nftCard = new RepositoryModel();
    nftCard.name = 'NFT preview card component';
    nftCard.description = 'This is a solution to the NFT preview card component challenge on Frontend Mentor. Frontend' +
      ' Mentor challenges help you improve your coding skills by building realistic projects.';
    nftCard.html_url = 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/nft-preview-card-component-main';
    nftCard.image = '../../assets/imageProjects/nft-card-mobile.png';

    const agencia = new RepositoryModel();
    agencia.name = 'Sunnyside agency landing page';
    agencia.html_url = 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/sunnyside-agency-landing-page-main';
    agencia.description = 'This is a solution to the Sunnyside agency landing page challenge on Frontend Mentor.' +
      ' Frontend Mentor challenges help you improve your coding skills by building realistic projects.';
    agencia.image = '../../assets/imageProjects/agencia-mobile.png';

    this.repositories.push(ecomerce);
    this.repositories.push(nftCard);
    this.repositories.push(agencia);
  }

  preencherImagens(name: string): string {
    let image = '';
    switch (name) {
      case 'tcc-fed-fio-navalha':
        image = '../../assets/imageProjects/tcc-fed-mobile.png';
        break;
      case 'tcc-srv-fio-navalha':
        image = '../../assets/imageProjects/tcc-srv-mobile.png';
        break;
      case 'algorithms':
        image = '../../assets/imageProjects/lista-dupla-ligada-mobile.png';
        break;
      case 'AirCnC':
        image = '../../assets/imageProjects/aircnc-mobile.png';
        break;
      case 'WazeDev':
        image = '../../assets/imageProjects/wazedev-mobile.png';
        break;
      case 'campact_huffman':
        image = '../../assets/imageProjects/huffman-mobile.png';
        break;
      default:
        break;
    }
    return image;
  }

  voltarProjeto(): void {
    this.index--;
    if (this.index < 0) {
      this.index = this.repositories.length - 1;
    }
    this.projectShow = this.repositories[this.index];
  }

  avancarProjeto(): void {
    this.index++;
    if (this.index > this.repositories.length - 1) {
      this.index = 0;
    }

    this.projectShow = this.repositories[this.index];
  }
}
