import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { CarousselComponent } from './caroussel/caroussel.component';

@NgModule({
  declarations: [
    CarousselComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule
  ],
    exports: [
      CarousselComponent
    ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
