import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardProject } from '../models/card-project';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  listaProjecto: CardProject[];
  observable$: Subscription;

  constructor(private service: DataService) { }

  ngOnDestroy(): void {
        this.observable$.unsubscribe();
  }

  ngOnInit(): void {
    this.listaProjecto = [];

    this.observable$ =  this.service.buscarDadosGithub().subscribe(response => {
      const lista = ['tcc-fed-fio-navalha', 'frontend-mentor', 'campact_huffman',  'algorithms'];
      const filtrados = response.filter(projeto => lista.includes(projeto.name));

      filtrados.forEach(item => {
        const projeto = new CardProject(item.name, 'Software Developer', item.description, this.chooseImage(item.name), item.html_url);
        this.listaProjecto.push(projeto);
      });
    });
  }


  chooseImage(nomeProjeto: string): string {
    let index = 0;
    let pathImage = '';
    switch (nomeProjeto) {
      case 'campact_huffman':
        pathImage = 'https://raw.githubusercontent.com/luccastraumer/campact_huffman/main/1000px-Huffman_tree.svg.png';
        break;
      case 'tcc-fed-fio-navalha':
        pathImage = 'https://github.com/LuccasTraumer/tcc-fed-fio-navalha/blob/main/images/buscar.png?raw=true';
        break;
      case 'frontend-mentor':
        const opcoesImagensFrontend = [
        'https://github.com/LuccasTraumer/frontend-mentor/raw/main/ecommerce-product-page-main/result/desktop.png',
        'https://github.com/LuccasTraumer/frontend-mentor/raw/main/nft-preview-card-component-main/challenge/image/desktop-results.png',
        'https://github.com/LuccasTraumer/frontend-mentor/raw/main/sunnyside-agency-landing-page-main/agency/src/assets/screenshot/desktop.png'
        ];
        index = (+(Math.random() * (opcoesImagensFrontend.length - 1) - 1).toFixed(0));
        pathImage = opcoesImagensFrontend[index < 0 ? 0 : index];

        break;
      case 'algorithms':
        const opcoesImagensAlg = [
          'https://github.com/LuccasTraumer/algorithms/raw/main/queue/assets/Queue-Data-Structures-1024x1024.png',
          'https://github.com/LuccasTraumer/algorithms/raw/main/stack/assets/push.png',
          'https://github.com/LuccasTraumer/algorithms/raw/main/linked_list_implementation/doubly_linked_list/assets/circular-doubly-linked-list.png',
          'https://github.com/LuccasTraumer/algorithms/raw/main/linked_list_implementation/linkedlist/assets/image_concept.png',
        ];
        index = (+(Math.random() * (opcoesImagensAlg.length - 1) - 1).toFixed(0));

        pathImage = opcoesImagensAlg[index < 0 ? 0 : index];
        break;

      default:
        pathImage = '';
        break;
    }

    return pathImage;
  }
}
