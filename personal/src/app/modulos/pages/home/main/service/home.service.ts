import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../../utils/constantes';
import {BehaviorSubject} from "rxjs";
import {HomeData} from "../../../../shared/models/home-data";
import {WelcomeSection} from "../../../../shared/models/welcome-section";
import {HistorySection} from "../../../../shared/models/history-section";
import {RoleSection} from "../../../../shared/models/role-section";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly CONSTANTES = Constantes;
  private http: HttpClient = inject(HttpClient);

  private readonly PATH_ROOT = `${this.CONSTANTES.ROOT_PATH}/home`;

  private homeData: HomeData = {} as HomeData;

  private homeSectionStore = new BehaviorSubject<HomeData>(this.homeData);

  getSectionStore(): BehaviorSubject<HomeData> {
    return this.homeSectionStore;
  }

  setWelcomeSection(value: WelcomeSection): void {
    this.homeData.welcomeSection = value;
  }

  setRoleSection(value: RoleSection[]): void {
    this.homeData.roleSection = value;
  }

  setHistorySection(value: HistorySection): void {
    this.homeData.historySection = value;
  }

  getWellcomeSection() {
    return this.http.get<WelcomeSection>(`${this.PATH_ROOT}/welcome`);
  }

  getHistorySection() {
    return this.http.get<HistorySection>(`${this.PATH_ROOT}/history`);
  }

  getRoleSection() {
    return this.http.get<RoleSection>(`${this.PATH_ROOT}/functions`);
  }
}
