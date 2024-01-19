import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../../utils/constantes';
import {BehaviorSubject} from "rxjs";
import {HomeData} from "../model/home-data";
import {WelcomeSection} from "../model/welcome-section";
import {HistorySection} from "../model/history-section";
import {RoleSection} from "../model/role-section";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly CONSTANTES = Constantes;
  private http: HttpClient = inject(HttpClient);

  private homeSectionStore = new BehaviorSubject<HomeData>({} as HomeData);

  getDataHome() {
    return this.http.get(`${this.CONSTANTES.ROOT_PATH}/home`);
  }

  setHomeSection(homeSection: HomeData): void {
    this.homeSectionStore.next(homeSection);
  }

  getWellcomeSection() {
    return this.http.get<WelcomeSection>(`http://localhost:3000/home/welcome`);
  }

  getHistorySection() {
    return this.http.get<HistorySection>(`http://localhost:3000/home/history`);
  }

  getRoleSection() {
    return this.http.get<RoleSection>(`http://localhost:3000/home/functions`);
  }
}
