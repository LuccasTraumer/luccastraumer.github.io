import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfloio',
  templateUrl: './portfloio.component.html',
  styleUrls: ['./portfloio.component.scss']
})
export class PortfloioComponent implements OnInit {

  projects: Project[] = [
    {
      img: 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685057970/desktop_jai95n.png',
      ariaLabel: 'E-commerc project',
      linkProject: 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/ecommerce-product-page-main'
    },
    {
      img: 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685058006/desktop_utazwo.png',
      ariaLabel: 'Landing Page Project',
      linkProject: 'https://github.com/LuccasTraumer/frontend-mentor/tree/main/sunnyside-agency-landing-page-main/agency'
    },
    {
      img: 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685058021/pagina-desktop_lbniez.png',
      ariaLabel: 'Personal Page',
      linkProject: 'https://github.com/LuccasTraumer/luccastraumer.github.io'
    },
    {
      img: 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685058036/1000px-Huffman_tree.svg_caapny.png',
      ariaLabel: 'Compact Huffman Algorithm',
      linkProject: 'https://github.com/LuccasTraumer/campact_huffman'
    },
    {
      img: 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685058047/Queue-Data-Structures-1024x1024_iuowt5.png',
      ariaLabel: 'Algorithm Project',
      linkProject: 'https://github.com/LuccasTraumer/algorithms/tree/main/queue'
    },
    {
      img: 'https://res.cloudinary.com/dfixlnbhd/image/upload/v1685058058/buscar_igtpyr.png',
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
