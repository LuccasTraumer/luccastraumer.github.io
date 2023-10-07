import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { ViewRoutingModule } from './view-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './main/service/home.service';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    ViewRoutingModule,
    HttpClientModule
  ],
  providers: [
    HomeService
  ]
})
export class ViewModule { }
