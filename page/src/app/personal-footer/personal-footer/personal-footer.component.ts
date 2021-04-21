import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'personal-footer',
  templateUrl: './personal-footer.component.html',
  styleUrls: ['./personal-footer.component.scss']
})
export class PersonalFooterComponent {

  public readonly year = new Date().getFullYear();

  @Input()
  isDarkMode: boolean;

  constructor() { }
}
