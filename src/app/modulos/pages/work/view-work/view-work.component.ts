import {Component, inject, WritableSignal} from '@angular/core';
import { WorkService } from '../service/work.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import ContactComponent from "../../../layout/contact/contact.component";
import {CarousselComponent} from "../../../shared-ui/caroussel/caroussel.component";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {Router} from "@angular/router";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-home-work',
  templateUrl: './view-work.component.html',
  styleUrls: ['./view-work.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    ContactComponent,
    CarousselComponent,
    SkeltonComponent
  ],
  providers: [WorkService, Router]
})
export default class ViewWorkComponent {
  private workService: WorkService = inject(WorkService);
  protected work!: WritableSignal<Work>;

  constructor() {
    // @ts-ignore
    this.work = toSignal(this.workService.getWorkData());
  }
}

export interface Work {
  title: string;
  images: string[];
  description: string;
}
