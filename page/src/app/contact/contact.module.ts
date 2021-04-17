import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [ContactComponent]
})
export class ContactModule { }
