import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingPageComponent } from './building-page/building-page.component';



@NgModule({
  declarations: [BuildingPageComponent],
  imports: [
    CommonModule
  ],
  exports: [BuildingPageComponent]
})
export class BuildingModule { }
