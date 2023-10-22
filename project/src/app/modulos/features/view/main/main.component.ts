import {AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import { HomeService } from './service/home.service';
import { WelcomeSection } from './model/welcome-section';
import { RoleSection } from './model/role-section';
import { HistorySection } from './model/history-section';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewChecked {
  homeData!: HomeData;

  @ViewChild('history')
  historySection!: ElementRef<HTMLInputElement>;
  constructor(private homeService: HomeService, private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit(): void {
    this.homeService.getDataHome().subscribe({
      next: value => {
        this.homeData = value as HomeData;
      },
      error: err => console.error(err)
    })
  }

  click(event: any) {
    event.preventDefault();

    window.location.href = "#history";
  }

  ngAfterViewChecked(): void {
    console.warn(this.historySection);
  }
}

interface HomeData {
  welcomeSection: WelcomeSection;
  roleSection: RoleSection[];
  historySection: HistorySection
}
