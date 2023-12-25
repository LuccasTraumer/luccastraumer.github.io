import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../../utils/constantes';
import {BehaviorSubject} from "rxjs";
import {HomeData} from "../model/home-data";

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
    return this.homeSectionStore.asObservable();
  }

  getHistorySection() {
    return this.homeSectionStore.asObservable();
  }

  getRoleSection() {
    return this.homeSectionStore.asObservable();
  }
}
