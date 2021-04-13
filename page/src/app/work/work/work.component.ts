import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

  @Input()
  nameProject: string;

  constructor() { }

  ngOnInit(): void {
  }

}
