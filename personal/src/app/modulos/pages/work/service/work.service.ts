import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private httpClient: HttpClient) { }
  private readonly CONSTANTES = Constantes;
  getWorkData() {
    return this.httpClient.get(`${this.CONSTANTES.ROOT_PATH}/work`);
  }
}
