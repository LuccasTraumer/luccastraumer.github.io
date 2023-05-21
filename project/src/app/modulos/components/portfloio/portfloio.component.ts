import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfloio',
  templateUrl: './portfloio.component.html',
  styleUrls: ['./portfloio.component.scss']
})
export class PortfloioComponent implements OnInit {

  projects: Project[] = [
    {
      img: 'https://github.com/LuccasTraumer/frontend-mentor/raw/main/ecommerce-product-page-main/result/desktop.png',
      ariaLabel: 'E-commerc project',
      linkProject: 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/ecommerce-product-page-main'
    },
    {
      img: 'https://github.com/LuccasTraumer/frontend-mentor/raw/main/sunnyside-agency-landing-page-main/agency/src/assets/screenshot/desktop.png',
      ariaLabel: 'Landing Page Project',
      linkProject: 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/sunnyside-agency-landing-page-main/agency'
    },
    {
      img: 'https://github.com/LuccasTraumer/luccastraumer.github.io/raw/main/assets/pagina-desktop.png',
      ariaLabel: 'Personal Page',
      linkProject: 'https://github.com/LuccasTraumer/luccastraumer.github.io'
    },
    {
      img: 'https://raw.githubusercontent.com/LuccasTraumer/campact_huffman/main/1000px-Huffman_tree.svg.png',
      ariaLabel: 'Compact Huffman Algorithm',
      linkProject: 'https://github.com/LuccasTraumer/campact_huffman'
    },
    {
      img: 'https://github.com/LuccasTraumer/algorithms/raw/main/queue/assets/Queue-Data-Structures-1024x1024.png',
      ariaLabel: 'Algorithm Project',
      linkProject: 'https://github.com/LuccasTraumer/algorithms/tree/main/queue'
    },
    {
      img: 'https://github.com/LuccasTraumer/tcc-fed-fio-navalha/raw/main/images/buscar.png',
      ariaLabel: 'Fio da Navalha Project',
      linkProject: 'https://github.com/LuccasTraumer/tcc-fed-fio-navalha'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

interface Project {
  img: string;
  ariaLabel: string;
  linkProject: string;
}
