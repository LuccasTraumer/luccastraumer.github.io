import { Component, inject, OnDestroy, OnInit} from '@angular/core';
import { WorkService } from '../service/work.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import ContactComponent from "../../../layout/contact/contact.component";
import {Subject, takeUntil} from "rxjs";
import {CarousselComponent} from "../../../shared-ui/caroussel/caroussel.component";
import {SkeltonComponent} from "../../../shared-ui/skelton/skelton.component";
import {Router} from "@angular/router";

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
export default class ViewWorkComponent implements OnInit, OnDestroy {
  private workService: WorkService = inject(WorkService);
  private ngDestroy$ = new Subject();
  work!: Work;

  ngOnInit(): void {
    this.workService.getWorkData()
      .pipe(takeUntil(this.ngDestroy$))
      .subscribe({
        next: value => this.work = value
      });
  }

  ngOnDestroy(): void {
    this.ngDestroy$.next(true);
    this.ngDestroy$.complete();
  }
}

export interface Work {
  title: string;
  images: string[];
  description: string;
}
