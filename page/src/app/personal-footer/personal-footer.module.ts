import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalFooterComponent } from './personal-footer/personal-footer.component';



@NgModule({
  declarations: [PersonalFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [PersonalFooterComponent]
})
export class PersonalFooterModule { }
