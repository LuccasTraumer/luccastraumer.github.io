import { Component, OnInit } from '@angular/core';
import { Constantes } from '../../../../utils/constantes';
import { HomeService } from './service/home.service';
import { WelcomeSection } from './model/welcome-section';
import { RoleSection } from './model/role-section';
import { HistorySection } from './model/history-section';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  homeData!: HomeData;
  constructor(private homeService: HomeService) {
  }

  ngOnInit(): void {
    this.homeService.getDataHome().subscribe({
      next: value => {
        this.homeData = value as HomeData;
      },
      error: err => console.error(err)
    })
  }
}

interface HomeData {
  welcomeSection: WelcomeSection;
  roleSection: RoleSection[];
  historySection: HistorySection
}
