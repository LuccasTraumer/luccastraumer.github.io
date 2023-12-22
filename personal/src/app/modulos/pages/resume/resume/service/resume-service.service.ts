import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class ResumeServiceService {
  private readonly CONSTANTES = Constantes;
  constructor(private http: HttpClient) { }

  getDataResume() {
    return this.http.get(`${this.CONSTANTES.ROOT_PATH}/resume`);
  }
}
