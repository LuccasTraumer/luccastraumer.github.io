import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LucideAngularModule } from 'lucide-angular';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule
  ],
    exports: [
      ButtonComponent
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
