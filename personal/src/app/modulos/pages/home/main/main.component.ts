import {AfterViewChecked, Component, ElementRef, inject, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import { HomeService } from './service/home.service';
import { WelcomeSection } from './model/welcome-section';
import { RoleSection } from './model/role-section';
import { HistorySection } from './model/history-section';
import {catchError, map, of, retry, shareReplay, Subject, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewChecked, OnDestroy {
  private end!: Subject<any>;
  homeData: HomeData = {} as HomeData;

  @ViewChild('history')
  historySection!: ElementRef<HTMLInputElement>;

  private homeService = inject(HomeService);
  private renderer2 = inject(Renderer2);
  private elementRef = inject(ElementRef);

  ngOnDestroy(): void {
      this.end.next(`end`);
      this.end.complete();
    }

  ngOnInit(): void {
    this.homeService.getDataHome()
      // .pipe(map(value => value),
      //   catchError(error => {
      //     console.error(error)
      //     return of(error);
      //   }))
      // .pipe(shareReplay())
      // .pipe(retry(1))
      // .pipe(takeUntil(this.end))
      .subscribe({
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
