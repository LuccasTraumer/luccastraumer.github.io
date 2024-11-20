import {inject, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../utils/constantes';
import {Work} from "../view-work/view-work.component";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private httpClient: HttpClient = inject(HttpClient);
  private readonly CONSTANTES = Constantes;
  getWorkData(): Observable<Work> {
    return this.httpClient.get<Work>(`${this.CONSTANTES.ROOT_PATH}/work`);
  }
}
