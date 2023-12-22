import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly CONSTANTES = Constantes;
  constructor(private http: HttpClient) { }

  getDataHome() {
    return this.http.get(`${this.CONSTANTES.ROOT_PATH}/home`);
  }
}
