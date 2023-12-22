import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkComponent } from './work/work.component';
import { ViewWorkComponent } from './view-work/view-work.component';

const routes: Routes = [
  {
    path: '',
    component: WorkComponent
  },
  {
    path: 'ciandt',
    component: ViewWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
