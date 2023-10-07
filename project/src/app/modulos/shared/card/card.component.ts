import { Component, Input } from '@angular/core';
import { CardInterfaceProps } from './card.interface.props';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements CardInterfaceProps {
  @Input() image?: string;
  @Input() title?: string;
  @Input() link?: string;
  @Input() contentLink?: string;

  constructor(private router: Router) {
  }

  redirectToProject() {
    this.router.navigateByUrl(`works/${this.title?.toLowerCase()!}`)
  }
}
