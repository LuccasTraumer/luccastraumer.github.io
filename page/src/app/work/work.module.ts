import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { ApiGithubService } from 'src/service/api-github.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [WorkComponent, CardProjectComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ApiGithubService],
  exports: [WorkComponent]
})
export class WorkModule { }
