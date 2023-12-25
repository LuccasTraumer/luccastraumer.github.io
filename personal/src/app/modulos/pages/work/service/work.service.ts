import {inject, Injectable, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class WorkService implements OnInit {
  private httpClient: HttpClient = inject(HttpClient);
  private readonly CONSTANTES = Constantes;
  getWorkData() {
    return this.httpClient.get(`${this.CONSTANTES.ROOT_PATH}/work`);
  }

  ngOnInit(): void {
    this.getWorkData();
  }
}
