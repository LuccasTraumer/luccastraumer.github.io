import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constantes } from '../../../../utils/constantes';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private readonly CONSTANTES = Constantes;
  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(`${this.CONSTANTES.ROOT_PATH}/article`)
  }
}
