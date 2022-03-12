import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { DataService } from '../../services/data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let dataService: DataService;

  const buscarGithubMock = [
    {
      name: 'campact_huffman',
      description: 'Description',
      html_url: 'url'
    }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      providers: [ DataService ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;

    dataService = TestBed.inject(DataService);

    spyOn(dataService, 'buscarDadosGithub').and.returnValue(of(buscarGithubMock));
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('Quando iniciar Componente deve preencher o listaProjecto', () => {
    component.ngOnInit();

    expect(component.listaProjecto).toBeTruthy();
    expect(component.listaProjecto.length).toEqual(1);
  });

  test.each([
    ['campact_huffman', 'https://raw.githubusercontent.com/luccastraumer/campact_huffman/main/1000px-Huffman_tree.svg.png'],
    ['tcc-fed-fio-navalha', 'https://github.com/LuccasTraumer/tcc-fed-fio-navalha/blob/main/images/buscar.png?raw=true'],
    ['xxx', '']
  ])
  ('Quando executar o chooseImage deve retornar o path', (nomeProjeto: string, retornoEsperado: string) => {
    const response = component.chooseImage(nomeProjeto);

    expect(response).toEqual(retornoEsperado);
  });

  test.each([
    ['frontend-mentor',
      [
        'https://github.com/LuccasTraumer/frontend-mentor/raw/main/ecommerce-product-page-main/result/desktop.png',
        'https://github.com/LuccasTraumer/frontend-mentor/raw/main/nft-preview-card-component-main/challenge/image/desktop-results.png',
        'https://github.com/LuccasTraumer/frontend-mentor/raw/main/sunnyside-agency-landing-page-main/agency/src/assets/screenshot/desktop.png'
      ]
    ],
    ['algorithms',
      [
        'https://github.com/LuccasTraumer/algorithms/raw/main/queue/assets/Queue-Data-Structures-1024x1024.png',
        'https://github.com/LuccasTraumer/algorithms/raw/main/stack/assets/push.png',
        'https://github.com/LuccasTraumer/algorithms/raw/main/linked_list_implementation/doubly_linked_list/assets/circular-doubly-linked-list.png',
        'https://github.com/LuccasTraumer/algorithms/raw/main/linked_list_implementation/linkedlist/assets/image_concept.png',

      ]],
  ])('Quando testar chooseImage com Array', (nomeProjeto, arrayImagens) => {
    const retorno = component.chooseImage(nomeProjeto);

    expect(arrayImagens.includes(retorno)).toBeTruthy();
  });
});
