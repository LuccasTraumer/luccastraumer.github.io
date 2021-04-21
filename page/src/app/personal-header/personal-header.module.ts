import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalHeaderComponent } from './personal-header/personal-header.component';



@NgModule({
  declarations: [PersonalHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [PersonalHeaderComponent]
})
export class PersonalHeaderModule { }
