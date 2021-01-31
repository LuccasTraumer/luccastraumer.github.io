import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ListHobbiesComponent } from './list-hobbies/list-hobbies.component';
import { PersonalDataListComponent } from './personal-data-list/personal-data-list.component';



@NgModule({
  declarations: [AboutSectionComponent, ListHobbiesComponent, PersonalDataListComponent],
  imports: [
    CommonModule,
  ],
  exports: [AboutSectionComponent]
})
export class AboutModule { }
