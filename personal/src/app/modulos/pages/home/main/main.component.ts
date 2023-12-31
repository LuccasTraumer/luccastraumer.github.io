import { Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import { HomeService } from './service/home.service';
import { Subscription } from "rxjs";
import {HomeData} from "./model/home-data";
import {LoaderService} from "../../../shared/loader/service/loader.service";
import {SharedModule} from "../../../shared/shared.module";
import {ComponentsModule} from "../components/components.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SkeltonComponent} from "../../../shared/skelton/skelton.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    HttpClientModule,
    SkeltonComponent
  ],
  styleUrls: ['./main.component.scss']
})
export default class MainComponent implements OnInit, OnDestroy {
  homeData: HomeData = {} as HomeData;

  @ViewChild('history')
  historySection!: ElementRef<HTMLInputElement>;

  private homeService = inject(HomeService);
  private renderer2 = inject(Renderer2);
  private elementRef = inject(ElementRef);
  private loaderService = inject(LoaderService);
  private subs!: Subscription;

  ngOnDestroy(): void {
      this.subs.unsubscribe();
    }

  ngOnInit(): void {
    this.subs = this.homeService.getDataHome()
      .subscribe({
      next: value => {
        this.loaderService.setStateLoader(true);
        this.homeData = value as HomeData;
        this.homeService.setHomeSection(this.homeData);
      },
      error: err => console.error(err),
      complete: () => this.loaderService.setStateLoader(false)
    })
  }

  // ngAfterViewChecked(): void {
  //   console.warn(this.historySection);
  // }

  // isChangeBackground() {
  //   return [1746, 1574, 1468, 1227, 1525, 1525].find(item => item === this.historySection.nativeElement.offsetTop);
  // }
}


