import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

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

  ngOnInit(): void {
  }

  clickButton() {
    this.clickEventEmitter.emit(this.content);
  }

}
