import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goContact() {
    console.log('Cliquei')
    window.location.href = '#contact'
  }
}
