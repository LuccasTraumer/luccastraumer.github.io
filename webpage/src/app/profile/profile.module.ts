import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionComponent } from './profile-section/profile-section.component';
import { CardComponent } from './card/card.component';
import { RoundedImageComponent } from './rounded-image/rounded-image.component';



@NgModule({
  declarations: [ProfileSectionComponent, CardComponent, RoundedImageComponent],
  imports: [
    CommonModule
  ],
  exports: [ProfileSectionComponent, CardComponent, RoundedImageComponent]
})
export class ProfileModule { }
