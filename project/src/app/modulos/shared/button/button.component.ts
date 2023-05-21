import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
