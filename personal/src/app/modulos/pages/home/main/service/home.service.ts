import {inject, Injectable, signal} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../utils/constantes';
import {BehaviorSubject, Observable, of, switchMap} from "rxjs";
import {HomeState} from "../../../../shared-ui/models/home-state";
import {WelcomeSection} from "../../../../shared-ui/models/welcome-section";
import {HistorySection} from "../../../../shared-ui/models/history-section";
import {RoleSection} from "../../../../shared-ui/models/role-section";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly CONSTANTES = Constantes;
  private http: HttpClient = inject(HttpClient);

  private readonly PATH_ROOT = `${this.CONSTANTES.ROOT_PATH}/home`;

  private homeData: HomeState = inject(HomeState);

  private homeSectionStore = new BehaviorSubject<HomeState>(this.homeData);

  getSectionStore(): BehaviorSubject<HomeState> {
    return this.homeSectionStore;
  }

  setWelcomeSection(value: WelcomeSection): void {
    this.homeData.welcomeSection = signal(value);
  }

  setRoleSection(value: RoleSection[]): void {
    this.homeData.roleSection = signal(value);
  }

  setHistorySection(value: HistorySection): void {
    this.homeData.historySection = signal(value);
  }

  getWellcomeSection() {
    return this.http.get<WelcomeSection>(`${this.PATH_ROOT}/welcome`).pipe(switchMap((data: any) => {
      return of(data.welcomeSection);
    }));
  }

  getHistorySection(): Observable<HistorySection> {
    return this.http.get<HistorySection>(`${this.PATH_ROOT}/history`).pipe(switchMap((data: any) => {
      return of(data.historySection);
    }));
  }

  getRoleSection() {
    return this.http.get<RoleSection[]>(`${this.PATH_ROOT}/functions`).pipe(switchMap((data: any) => {
      return of(data.roleSection);
    }));
  }

  getHomeData() {
    return this.homeData;
  }
}
