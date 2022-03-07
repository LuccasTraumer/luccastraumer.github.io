import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [QuadradoComponent, ButtonComponent],
  exports: [
    QuadradoComponent, ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
