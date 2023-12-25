import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { CarousselComponent } from './caroussel/caroussel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CarousselComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule
  ],
    exports: [
      ButtonComponent,
      CarousselComponent
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
