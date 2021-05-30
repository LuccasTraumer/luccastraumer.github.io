import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalHeaderComponent } from './personal-header/personal-header.component';
import { SwitchToggleComponent } from './switch-toggle/switch-toggle.component';
import { HamburguerMenuComponent } from './hamburguer-menu/hamburguer-menu.component';



@NgModule({
  declarations: [PersonalHeaderComponent, SwitchToggleComponent, HamburguerMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [PersonalHeaderComponent]
})
export class PersonalHeaderModule { }
