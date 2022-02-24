import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';

import { RepositoryModel } from 'src/model/repository-model';
import { DataService } from '../services/data.service';

import { ProjectsComponent } from './projects.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let dataService: DataService;

  const reposMock = new RepositoryModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports : [ HttpClientTestingModule ],
      declarations: [ ProjectsComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;

    dataService = TestBed.inject(DataService);

    reposMock.description = 'mock';
    reposMock.html_url = 'urlMock';
    reposMock.image = 'imageMock';
    reposMock.name = 'AirCnC';

    component.repositories.push(reposMock);

    const arrayMock: RepositoryModel[] = [reposMock];
    component.repositories = [];
    spyOn(dataService, 'buscarDadosGithub').and.returnValue(of(arrayMock));
  });

  test('should create', fakeAsync(() => {
    component.ngOnInit();

    expect(component).toBeTruthy();
  }));

  test('Quando iniciar o componente e busca na lista não houver contido com determinado nome não deve atribuir ' +
    'ao projectShow', () => {
    reposMock.name = 'mock';
    component.ngOnInit();

    expect(component).toBeTruthy();
    expect(component.projectShow).toBeFalsy();
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
    (component as any).index = 0;
    component.repositories = [reposMock, reposMock, reposMock];
    component.voltarProjeto();

    expect((component as any).index).toEqual(2);
  });

  test('Quando executar o metodo de voltar com index maior que 0 deve retroceder', () => {
    (component as any).index = 1;
    component.repositories = [reposMock, reposMock, reposMock];

    component.voltarProjeto();

    expect(component.projectShow).toBeTruthy();
    expect(component.projectShow).toEqual(reposMock);
  });

  test('Quando executar o metodo avancar com index valendo 0 deve prosseguir para o proximo', () => {
    component.repositories = [reposMock, reposMock, reposMock];
    component.avancarProjeto();

    expect(component.projectShow).toBeTruthy();
    expect(component.projectShow).toEqual(reposMock);
  });

  test('Quando executar o metodo avancar com index maior que 0 deve prosseguir para o proximo', () => {
    (component as any).index = 4;

    component.avancarProjeto();

    expect((component as any).index).toEqual(0);
  });
});
