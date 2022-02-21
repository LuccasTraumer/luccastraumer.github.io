import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RepositoryModel } from 'src/model/repository-model';
import { DataService } from '../services/data.service';

import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let dataService: DataService;

  const gitHubMock = [
    {
      name: 'mock1'
    }
  ];

  const reposMock = new RepositoryModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientModule ],
      declarations: [ ProjectsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;

    dataService = TestBed.inject(DataService);

    spyOn(dataService, 'buscarDadosGithub').and.returnValue(of(gitHubMock));
    fixture.detectChanges();

    reposMock.description = 'mock';
    reposMock.html_url = 'urlMock';
    reposMock.image = 'imageMock';
    reposMock.name = 'mock';
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test.each([
    ['tcc-fed-fio-navalha', '../../assets/imageProjects/tcc-fed-mobile.png'],
    ['tcc-srv-fio-navalha', '../../assets/imageProjects/tcc-srv-mobile.png'],
    ['algorithms', '../../assets/imageProjects/lista-dupla-ligada-mobile.png'],
    ['AirCnC', '../../assets/imageProjects/aircnc-mobile.png'],
    ['WazeDev', '../../assets/imageProjects/wazedev-mobile.png'],
    ['', ''],
    ['campact_huffman', '../../assets/imageProjects/huffman-mobile.png']
  ])('Quando executar o metodo preencherImagens com parametro %s deve retornar %s',
  (parametro: string, retornoEsperado: string) => {
    const response = component.preencherImagens(parametro);

    expect(response).toEqual(retornoEsperado);
  });

  test('Quando executar o metodo de voltar com index valendo 0 deve retroceder', () => {
    component.repositories.push(reposMock);

    component.voltarProjeto();

    expect((component as any).index).toEqual(3);
  });

  test('Quando executar o metodo de voltar com index maior que 0 deve retroceder', () => {
    (component as any).index = 1;

    const reposMock = new RepositoryModel();
    component.repositories.push(reposMock);

    component.voltarProjeto();

    expect(component.projectShow).toBeTruthy();
  });

  test('Quando executar o metodo avancar com index valendo 0 deve prosseguir para o proximo', () => {
    const reposMock = new RepositoryModel();
    component.repositories.push(reposMock);

    component.avancarProjeto();

    expect(component.projectShow).toBeTruthy();
  });

  test('Quando executar o metodo avancar com index maior que 0 deve prosseguir para o proximo', () => {
    (component as any).index = 1;

    const reposMock = new RepositoryModel();
    component.repositories.push(reposMock);

    component.avancarProjeto();

    expect((component as any).index).toEqual(0);
  });
});
