import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonTemplateComponent } from './button-template/button-template.component';



@NgModule({
  declarations: [ButtonTemplateComponent],
  imports: [
    CommonModule
  ],
  exports: [ButtonTemplateComponent]
})
export class ButtonModule { }
