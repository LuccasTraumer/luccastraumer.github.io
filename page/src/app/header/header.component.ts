import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeActive('About');
  }

  changeActive(textContent: string): void {
    const elementos = document.querySelectorAll('.lista__item');
    elementos.forEach(elemento => {
      console.log(`Elemento ta valendo ${elemento.textContent.includes(textContent)}`);
      elemento.classList.remove('active');

      if (elemento.textContent.toLocaleLowerCase().includes(textContent.toLocaleLowerCase())) {
        elemento.classList.add('active');
      }
    });

  }
}
