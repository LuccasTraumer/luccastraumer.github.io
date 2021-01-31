import { Component } from '@angular/core';

@Component({
  selector: 'list-hobbies',
  templateUrl: './list-hobbies.component.html',
  styleUrls: ['./list-hobbies.component.css']
})
export class ListHobbiesComponent {

  public readonly listaCards: {nameCard: string, urlImageCard: string}[] = [
  {
    nameCard: 'games',
    urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/controler-game.svg'
  },
  {
    nameCard: 'headphone',
    urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/headphone.svg'
  },
  {
    nameCard: 'plane',
    urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/plane.svg'
  },
  {
    nameCard: 'cinematic',
    urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/cinametic.svg'
  },
  {
    nameCard: 'coffe',
    urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/coffe.svg'
  },
  {
    nameCard: 'money',
    urlImageCard: 'https://raw.githubusercontent.com/LuccasTraumer/luccastraumer.github.io/f701c08ece98dc59a7c699fe92900e38c98789c2/webpage/src/assets/about-icons/money.svg'
  }
];

  constructor() { }

}
