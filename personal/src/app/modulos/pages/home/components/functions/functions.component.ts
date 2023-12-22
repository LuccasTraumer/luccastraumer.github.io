import { Component, Input } from '@angular/core';
import { RoleSection } from '../../main/model/role-section';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent {

  @Input()
  roleSection!: RoleSection[];
  constructor() { }

}
