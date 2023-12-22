import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LucideAngularModule } from 'lucide-angular';
import { CardComponent } from './card/card.component';
import { CarousselComponent } from './caroussel/caroussel.component';

@NgModule({
  declarations: [
    ButtonComponent,
    CardComponent,
    CarousselComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule
  ],
    exports: [
      ButtonComponent,
      CardComponent,
      CarousselComponent
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
