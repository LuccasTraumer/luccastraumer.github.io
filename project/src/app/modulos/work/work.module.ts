import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { ViewWorkComponent } from './view-work/view-work.component';
import { WorkRoutingModule } from './work-routing.module';



@NgModule({
  declarations: [
    WorkComponent,
    ViewWorkComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
