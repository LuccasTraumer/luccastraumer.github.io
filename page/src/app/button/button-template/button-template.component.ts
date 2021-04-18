import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-template',
  templateUrl: './button-template.component.html',
  styleUrls: ['./button-template.component.scss']
})
export class ButtonTemplateComponent implements OnInit {

  @Input()
  redirectLink: string;

  @Input()
  insideText: string;

  constructor() { }

  ngOnInit(): void { }

}
