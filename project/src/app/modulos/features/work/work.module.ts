import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { ViewWorkComponent } from './view-work/view-work.component';
import { WorkRoutingModule } from './work-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkService } from './service/work.service';

@NgModule({
  declarations: [
    WorkComponent,
    ViewWorkComponent
  ],
  imports: [
    CommonModule,
    WorkRoutingModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [WorkService]
})
export class WorkModule { }
