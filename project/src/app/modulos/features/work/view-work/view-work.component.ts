import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss']
})
export class ViewWorkComponent implements OnInit {
  work!: Work;

  constructor() { }

  ngOnInit(): void {
    this.work = {
      title: 'ciandt',
      description: 'A CI&T é uma empresa de tecnologia da informação e desenvolvimento de software com atuação no Brasil, nos Estados Unidos, no Canadá, no Reino Unido, em Portugal, na China, na Colômbia, no Japão e na Austrália.\n' +
        '\n' +
        'Me conectei a CI&T em fevereiro de 2020, após um longo processo de seleção de estágio, onde dentre aproximadamente 1000 participantes apenas 100 passaram. Como minha primeira experiência profissional no ramo de desenvolvimento de software, foi incrível, pois me deu base para tudo que aplico e sei hoje. Foi nessa oportunidade que pude atuar com backend, frontend, testes, arquitetura. Entender não somente de tecnologias, como linguagens, metodologias, padrões mas também sobre processos, discovery, para poder entender a raiz da dor de nossos clientes, propor soluções ideias, rápidas e escaláveis para aqueles problemas. Dentro da CI&T atuei majoritariamente em dois clientes muito grandes e diversos projetos dentro desses clientes, sendo um deles um dos maiores banco nacionais e outro uma das maiores instituições de ensino do Brasil.\n',
      images: [
        'data:image/png;base64,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',
        'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,h_250/https://digitalks.com.br/wp-content/uploads/gravity_forms/1-eff459ab3cc4a9894ca178fb784a528a/2020/09/Logo_Driven_CMYK_V.png',
        'https://dmwnh9nwzeoaa.cloudfront.net/2021-04/ciandt-logo-black-white-version.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRftp7T8EERO7ljZayLrIvwdm4bKN04O4gLfcvDbUD0jY9MkycOhTIL1x3FL4853BRyo_g&usqp=CAU'

      ]
    }
  }

}

interface Work {
  title: string;
  images: string[];
  description: string;
}
