import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { ContactSectionComponent } from './contact-section/contact-section.component';
import { InputDataComponent } from './input-data/input-data.component';
import { MapsComponent } from './maps/maps.component';



@NgModule({
  declarations: [ContactSectionComponent, InputDataComponent, MapsComponent],
  imports: [
    CommonModule,
    AgmCoreModule
  ],
  exports: [ContactSectionComponent]
})
export class ContactModule { }
