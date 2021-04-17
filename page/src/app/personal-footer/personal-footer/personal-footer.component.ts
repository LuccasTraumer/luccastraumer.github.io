import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-footer',
  templateUrl: './personal-footer.component.html',
  styleUrls: ['./personal-footer.component.scss']
})
export class PersonalFooterComponent implements OnInit {

  public readonly year = new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
