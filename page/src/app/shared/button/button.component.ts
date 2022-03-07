import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  buttonAzulHidden: boolean;

  @Input()
  textContent: string;

  @Input()
  isItalicText: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
