import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alertUser() {
    alert('This form is not working for now. ')
  }

}
