import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import { CardInterfaceProps } from './card.interface.props';
import { Router } from '@angular/router';
import {LucideAngularModule} from "lucide-angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule
  ],
  providers: [

  ],
  styleUrls: ['./card.component.scss']
})
export default class CardComponent implements CardInterfaceProps {
  @Input() image?: string;
  @Input() title?: string;
  @Input() link?: string;
  @Input() contentLink?: string;

  @Output()
  eventEmitter = new EventEmitter<any>();

  redirectToProject() {
    this.eventEmitter.next(this.title?.toLowerCase());
  }
}
