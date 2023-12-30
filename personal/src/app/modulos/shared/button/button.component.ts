import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {LucideAngularModule} from "lucide-angular";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ButtonComponent {

  @Input()
  content: string = 'button';

  @Input()
  hasBackground: boolean = true;

  @Input()
  classIcon: string = 'move-right';

  @Input()
  hasIcon: boolean = true;

  @Output()
  clickEventEmitter = new EventEmitter<any>();

  constructor() { }

  clickButton() {
    this.clickEventEmitter.emit(this.content);
  }
}
