import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CardInterfaceProps} from './card.interface.props';
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
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
