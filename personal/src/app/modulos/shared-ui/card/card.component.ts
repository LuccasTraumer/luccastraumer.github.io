import {ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {CardInterfaceProps} from './card.interface.props';
import {LucideAngularModule} from "lucide-angular";
import {CommonModule, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  standalone: true,
  imports: [
    LucideAngularModule,
    CommonModule,
    NgOptimizedImage,
  ],
  providers: [

  ],
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CardComponent implements CardInterfaceProps, OnInit {
  @Input() image?: string;

  @Input() title?: string;

  @Input() link?: string;

  @Input() contentLink?: string;

  @Output() eventEmitter = new EventEmitter<any>();

  img!: string;

  redirectToProject() {
    this.eventEmitter.next(this.title?.toLowerCase());
  }

  ngOnInit(): void {
    this.img = 'CIT_TRANSPARENT';
  }
}
