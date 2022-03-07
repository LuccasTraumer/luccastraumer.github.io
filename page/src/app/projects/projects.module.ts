import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [ProjectsComponent, CardComponent],
    exports: [
        ProjectsComponent
    ],
    imports: [
        CommonModule,
      SharedModule
    ]
})
export class ProjectsModule { }
