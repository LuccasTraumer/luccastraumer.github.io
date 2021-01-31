import { Component } from '@angular/core';

@Component({
  selector: 'input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent {

  constructor() { }

  alertUser() {
    alert('This form is not working for now. My email: lucassj.dev@gmail.com');
  }

}
