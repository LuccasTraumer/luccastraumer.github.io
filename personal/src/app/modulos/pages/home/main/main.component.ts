import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Subscription } from "rxjs";
import {HomeData} from "./model/home-data";
import {SharedModule} from "../../../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SkeltonComponent} from "../../../shared/skelton/skelton.component";
import ContactComponent from "../components/contact/contact.component";
import FunctionsComponent from "../components/functions/functions.component";
import HistoryComponent from "../components/history/history.component";
import ProjectsComponent from "../components/projects/projects.component";
import WellcomeComponent from "../components/wellcome/wellcome.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    SkeltonComponent,
    ContactComponent,
    FunctionsComponent,
    HistoryComponent,
    ProjectsComponent,
    WellcomeComponent
  ],
  styleUrls: ['./main.component.scss']
})
export default class MainComponent implements OnInit {
  homeData: HomeData = {} as HomeData;

  @ViewChild('history')
  historySection!: ElementRef<HTMLInputElement>;
  private subs!: Subscription;

  ngOnInit(): void {

  }

  // ngAfterViewChecked(): void {
  //   console.warn(this.historySection);
  // }

  // isChangeBackground() {
  //   return [1746, 1574, 1468, 1227, 1525, 1525].find(item => item === this.historySection.nativeElement.offsetTop);
  // }
}


