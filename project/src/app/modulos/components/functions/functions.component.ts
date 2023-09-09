import { Component, Input, OnInit } from '@angular/core';
import { RoleSection } from '../../features/view/main/model/role-section';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {

  @Input()
  roleSection!: RoleSection[];

  constructor() { }

  ngOnInit(): void {
  }

}
